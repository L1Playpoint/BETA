import React from "react";
import { useMoralis } from "react-moralis";
import { io } from "socket.io-client";

export default function App() {
  /**
   * @dev web3 authentication
   */
  const { authenticate, isAuthenticated, isAuthenticating, logout, user } =
    useMoralis();

  React.useEffect(() => {
    if (isAuthenticated) {
      console.log(
        user
          ? user.get("ethAddress")
          : JSON.parse(localStorage.getItem("user")).get("ethAddress")
      );

      if(activeUsers.length === 0){
        socketRef.current.emit("get active users");
        socketRef.current.on("return active users", data => console.log(data))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    await logout();

    if (!isAuthenticated) {
      authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          localStorage.setItem("user", JSON.stringify(user));
          // console.log("logged in user:", user.get("ethAddress"));
          socketRef.current.emit("join online pool", {
            username: user.get("ethAddress"),
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    localStorage.removeItem("user");
    await logout();
    console.log("logged out");
  };

  /**
   * @dev chat components
   */
  
  const socketRef = React.useRef();
  const [activeUsers, setActiveUsers] = React.useState([]);

  React.useEffect(() => {
    socketRef.current = io("http://localhost:8000");
    socketRef.current.on("newUserUpdate", (data) => {
      setActiveUsers(data)
    });
    return () => {
      socketRef.current.on("disconnect");
    };
  }, [socketRef]);
  return (
    <div className="app__container">
      <h1>Moralis Hello World!</h1>
      <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>
        Logout
      </button>
    </div>
  );
}
