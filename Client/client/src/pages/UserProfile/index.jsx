import { Button, Divider } from "@mui/material";
import React from "react";
import "./styles/style.css";

export default function UserProfile() {
  return (
    <div className="userProfile__container">
      <div className="userCover">
        <div className="userInfo">
          <div className="walletInfo">
            <img
              src="https://ik.imagekit.io/lexworld/Logo.png"
              alt=""
              className="userImage"
            />
            <div>
              <h2>0xjhsdgsdvdsvvs...ssdv</h2>
              <p>Online</p>
            </div>
          </div>

          <div className="gameInfo">
            <div>
              <h2>134</h2>
              <p>Played Games</p>
            </div>
            <div>
              <h2>5432 PPTT</h2>
              <p>Total Earned</p>
            </div>
            <div>
              <h2>6650</h2>
              <p>Total Points</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="dashboard">
          <Button>
            <i className="ri-bubble-chart-fill"></i> Dashboard
          </Button>
          <Divider />
          <Button className="active">
            <i className="ri-wallet-3-line"></i> Wallet
          </Button>
          <Divider />
          <Button>
            <i className="ri-ancient-gate-line"></i> History
          </Button>
          <Divider />
          <Button>
            <i className="ri-settings-4-line"></i> Settings
          </Button>
        </div>
        <div className="main__container">history</div>
        <div className="messages">
          <div className="searchUser">
            <i className="ri-search-line"></i>
            <input placeholder="Search User" />
          </div>
        </div>
      </div>
    </div>
  );
}
