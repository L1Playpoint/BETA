import React from "react";
import { useMoralis } from "react-moralis";
import { Button } from "@mui/material";
import "./styles/style.css";

export default function Web3Auth() {
  const isAuthenticatedLocal = JSON.parse(
    localStorage.getItem("playpoint-wallet-status")
  );
  const [wallet, setWallet] = React.useState();
  const { authenticate, isAuthenticated, isAuthenticating, logout } =
    useMoralis();

  React.useEffect(() => {
    if (isAuthenticatedLocal)
      authenticate()
        .then((user) => {
          console.log(user.get("ethAddress"));
          setWallet(user);
        })
        .catch((error) => {
          console.log(error);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async () => {
    if (!isAuthenticated) {
      authenticate()
        .then((user) => {
          console.log(user.get("ethAddress"));
          localStorage.setItem("playpoint-wallet-status", true);
          setWallet(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  /**
   * @dev add error handling here
   */
  const logOut = async () => {
    localStorage.removeItem("playpoint-wallet-status");
    await logout();
    console.log("logged out");
  };

  return (
    <div className="web3auth__container">
      <div className="logo__container">
        <Button><i className="ri-menu-2-fill"></i></Button>
        <img src="https://ik.imagekit.io/lexworld/Logo.png" />
        <h3>Playpoint</h3>
      </div>
      <div className="web3auth__authController">
        {isAuthenticated ? (
          <div className="walletAddress">
            {wallet &&
              wallet?.get("ethAddress").substring(0, 12) +
                "..." +
                wallet
                  ?.get("ethAddress")
                  .substring(wallet.get("ethAddress").length - 4)}
          </div>
        ) : (
          <Button onClick={login} disabled={isAuthenticating}>
            Connect Wallet
          </Button>
        )}

        {isAuthenticated && (
          <Button onClick={logOut} disabled={isAuthenticating}>
            Disconnect
          </Button>
        )}
        <Button className="userDashboard">
        <i className="ri-user-3-line"></i>
        </Button>
      </div>
    </div>
  );
}
