import { Button, Divider } from "@mui/material";
import React from "react";
import "./styles/style.css";
import coinImage from "../../image/600282.png"

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
       <Button className="dashboard active" >
            <i className="ri-bubble-chart-fill"></i> Dashboard
          </Button>
          <Divider />
          <Button className="wallet" ><i className="ri-wallet-3-line" 
            ></i> Wallet
          </Button>
          <Divider />
         
          <Button className= "history">
            <i className="ri-ancient-gate-line"></i> History
          </Button>
          
          <Divider />
          

          <Button className= "settings">
            <i className="ri-settings-4-line"></i> Settings
          </Button>
          
        </div>
        <div className="main__container">
          <h1>Wallet</h1>
          <div className="balance__container">
           <div className="coins">
           <div className="image">
              <img
                src={coinImage}
                alt="coin img"
              />
            </div>
            <div className="amount">
              <p>Total Balance</p>
              <p className="sixty9">$69,999</p>
            </div>
           </div>
            <div className="buttons">
              <Button variant="outlined">Withdraw</Button>
              <Button variant="outlined">Sell</Button>
              <Button variant="outlined">Buy</Button>
            </div>
          </div>
          <div className="history__container">
            <h1>History</h1>
            <div className="statement">
              <div className="left">
              <Button variant="contained">Outgoing</Button>
                <p>03/20/2022 | 12:35 PM</p>
              </div>
              <div className="right">
              <p className="balance"> - $1506</p>
              <p >Balance : $2,456</p>
              </div>
            </div>
            <div className="statement">
              <div className="left">
              <Button className="incoming" variant="contained">Incoming</Button>
                <p>03/20/2022 | 12:35 PM</p>
              </div>
              <div className="right">
              <p className="balance"> + $1506</p>
              <p >Balance : $2,456</p>
              </div>
            </div>
            <div className="statement">
              <div className="left">
              <Button variant="contained">Outgoing</Button>
                <p>03/20/2022 | 12:35 PM</p>
              </div>
              <div className="right">
              <p className="balance"> - $1506</p>
              <p >Balance : $2,456</p>
              </div>
            </div>
          </div>
        </div>
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
