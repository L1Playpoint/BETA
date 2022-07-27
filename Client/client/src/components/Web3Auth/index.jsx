import React from "react";
import { useMoralis } from "react-moralis";
import { Button } from "@mui/material";
import "./styles/style.css";
import NavDrawer from "../NavDrawer";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../Context/Context";
// import { useContext } from "react";

export default function Web3Auth() {
  const navigate = useNavigate();
  const [wallet, setWallet] = React.useState();

  // const context = useContext(UserContext)

  const isAuthenticatedLocal = JSON.parse(
    localStorage.getItem("playpoint-wallet-status")
  );

  const { authenticate, isAuthenticated, isAuthenticating, logout } =
    useMoralis();


  React.useEffect(() => {
    if (isAuthenticatedLocal)
      authenticate()
        .then((user) => {
          console.log(user)
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
    // <UserContext.Consumer>
    //   {({ isAuthenticated, wallet, isAuthenticating, login, logOut }) =>  console.log(wallet) (
        <div className="web3auth__container">
          <div className="logo__container">
            <NavDrawer />
            <img
              src="https://ik.imagekit.io/lexworld/Logo.png"
              loading="lazy"
              alt=""
            />
            <h3 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              Playpoint
            </h3>
          </div>
          <div className="web3auth__authController">
            {isAuthenticated ? (
              <div className="walletAddress">
                {wallet &&
                  wallet?.get("ethAddress").substring(0, 18) +
                    "..." +
                    wallet
                      ?.get("ethAddress")
                      .substring(wallet.get("ethAddress").length - 7)}
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
            <Button
              className="userDashboard"
              onClick={() => navigate("/profile/123")}
            >
              <i className="ri-user-3-line"></i>
            </Button>
          </div>
        </div>
      )}
    // </UserContext.Consumer>
  // );
// }
