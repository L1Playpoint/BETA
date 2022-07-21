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
    if (JSON.parse(localStorage.getItem("playpoint-wallet-status"))) {
      authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          // console.log("logged in user:", user.get("ethAddress"));
          socketRef.current.emit("join online pool", {
            username: user.get("ethAddress"),
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async () => {
    await logout();

    if (!isAuthenticated) {
      authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          localStorage.setItem("playpoint-wallet-status", true);
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
    localStorage.removeItem("playpoint-wallet-status");
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
      setActiveUsers(data);
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
