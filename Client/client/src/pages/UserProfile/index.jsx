import { Button, Divider } from "@mui/material";
import React from "react";
import { io } from "socket.io-client";
import "./styles/style.css";
// import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [activeUsers, setActiveUsers] = React.useState([]);
  const [searchvalue, setSearchvalue] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [messageBox, showMessageBox] = React.useState(false);
  const [active, setActive] = React.useState({
    0: true,
    1: false,
    2: false,
    3: false,
  });
  const socketRef = React.useRef();

  console.log(active);

  const toggle = (id) => {
    setActive({ [id]: !active[id] });
  };

  React.useEffect(() => {
    socketRef.current = io("http://localhost:8000", {
      transports: ["websocket", "polling"],
    });
    socketRef.current.emit("join online pool", {
      username: "0xjhsdgsdvdsvvs...ssdv",
    });
    socketRef.current.on("newUserUpdate", (data) => {
      setActiveUsers(data);
    });
    return () => {
      socketRef.current.on("disconnect");
    };
  }, []);

  const searchUser = (value) => {
    setSearchvalue(value);
    if (value !== "") {
      console.log("enter button clicked...");
      const filteredData = activeUsers.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchvalue.toLowerCase());
      });
      setFilteredResults(filteredData);
      console.log(filteredResults);
    }
  };

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
          <Button
            className={`dashboard ${active[0] ? "active" : ""}`}
            onClick={() => toggle(0)}
            disabled = {active[0]}
          >
            <i className="ri-bubble-chart-fill"></i> Dashboard
          </Button>
          <Divider />
          <Button
            className={`${active[1] ? "active" : ""}`}
            onClick={() => toggle(1)}
            disabled={active[1]}
          >
            <i className="ri-wallet-3-line"></i> Wallet
          </Button>
          <Divider />
          <Button
            className={`${active[2] ? "active" : ""}`}
            onClick={() => toggle(2)}
            disabled={active[2]}
          >
            <i className="ri-ancient-gate-line"></i> History
          </Button>
          <Divider />
          <Button
            className={`${active[3] ? "active" : ""}`}
            onClick={() => toggle(3)}
            disabled={active[3]}
          >
            <i className="ri-settings-4-line"></i> Settings
          </Button>
        </div>
        <div className="main__container">history</div>
        <div className="messages">
          <div className="searchUser">
            <div className="searchInput">
              {!messageBox ? (
                <>
                  <i className="ri-search-line"></i>
                  <input
                    placeholder="Search User"
                    onChange={(e) => searchUser(e.target.value)}
                  />
                </>
              ) : (
                <div style={{ display: "flex", gap: "10px" }}>
                  <i
                    class="ri-arrow-left-line"
                    onClick={() => showMessageBox(false)}
                    style={{ cursor: "pointer" }}
                  ></i>
                  <p style={{ color: "#000" }}>0xjhsdg...svds</p>
                </div>
              )}
            </div>
            <div className="middle">
              {!messageBox ? (
                activeUsers.map((user, i) => {
                  return (
                    <div
                      className="activeUsers"
                      key={i}
                      onClick={() => showMessageBox(true)}
                    >
                      <div className="user">
                        <div className="userDetails">
                          <div className="image">
                            <img
                              src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/277584819_3211368542474917_8359344236602525081_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=iQyopYRv_DUAX8oDAwj&_nc_ht=scontent.fktm10-1.fna&oh=00_AT-WB2dMQzXtmAb4b_lfddERf-lL5m7XwBq6d_2jcwau-g&oe=62E232F8"
                              alt="user"
                            />
                            <div className="greenDot"></div>
                          </div>
                          <p>{user}</p>
                        </div>
                        {/* <Button className="chatBtn">
                          <i className="ri-message-3-line"></i>
                        </Button> */}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="chatBox">
                  <span className="messageContainer">
                    <span className="awayMessage">
                      <img
                        src="https://ik.imagekit.io/lexworld/Logo.png"
                        alt=""
                      />
                      <span className="message">How you doin mates!</span>
                    </span>
                    <span className="awayMessage">
                      <img
                        src="https://ik.imagekit.io/lexworld/Logo.png"
                        alt=""
                      />
                      <span className="message">
                        All good! What you think of this game?
                      </span>
                    </span>
                    <span className="homeMessage">
                      <span className="message">
                        Hello World, I guess this game is real good, wy say
                        guys?
                      </span>
                      <img
                        src="https://ik.imagekit.io/lexworld/Logo.png"
                        alt=""
                      />
                    </span>

                    <span className="awayMessage">
                      <img
                        src="https://ik.imagekit.io/lexworld/Logo.png"
                        alt=""
                      />
                      <span className="message">Hello World!</span>
                    </span>
                  </span>
                  <span className="messageInput">
                    <input type="text" placeholder="Enter Message..." />
                    <Button>
                      <i className="ri-send-plane-fill"></i>
                    </Button>
                  </span>
                </div>
              )}
              {/* // <TabPanel className="chatBox" value={value} index={0}> */}
              {/* // </TabPanel> */}
              {/* {activeUsers.map((user, i) => {
                return (
                  <div className="activeUsers" key={i} onClick= {showMessageBox(true)} >
                    <div className="user">
                      <div className="userDetails">
                        <div className="image">
                          <img
                            src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/277584819_3211368542474917_8359344236602525081_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=iQyopYRv_DUAX8oDAwj&_nc_ht=scontent.fktm10-1.fna&oh=00_AT-WB2dMQzXtmAb4b_lfddERf-lL5m7XwBq6d_2jcwau-g&oe=62E232F8"
                            alt="user"
                          />
                          <div className="greenDot"></div>
                        </div>
                        <p>{user}</p>
                      </div>
                      <Button className="chatBtn">
                        <i className="ri-message-3-line"></i>
                      </Button>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
