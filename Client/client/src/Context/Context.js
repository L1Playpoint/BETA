import React from "react";
import { useMoralis } from "react-moralis";

export const UserContext = React.createContext();

const UserAuthentication = ({ children }) => {
  const [wallet, setWallet] = React.useState();

  const isAuthenticatedLocal = JSON.parse(
    localStorage.getItem("playpoint-wallet-status")
  );

  const { authenticate, isAuthenticated, isAuthenticating, logout } =
    useMoralis();

  React.useEffect(() => {
    if (isAuthenticatedLocal)
      authenticate()
        .then((user) => {
          console.log(user);
          setWallet(user);
        })
        .catch((error) => {
          console.log(error);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (isAuthenticatedLocal)
      authenticate()
        .then((user) => {
          console.log(user);
          setWallet(user);
        })
        .catch((error) => {
          console.log(error);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async () => {
    if (!isAuthenticated)
      authenticate()
        .then((user) => {
          localStorage.setItem("playpoint-wallet-status", true);
          setWallet(user);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  /**
   * @dev add error handling here
   */
  const logOut = async () => {
    localStorage.removeItem("playpoint-wallet-status");
    await logout();
    console.log("Logged Out");
  };

  return (
    <UserContext.Provider value={{ wallet, login, logOut, isAuthenticating }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserAuthentication;
