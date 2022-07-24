import React from "react";
import "./styles/style.css";
import { Breadcrumbs, Link, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";

// packages for conversation
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ShowcaseFocused() {
  const { showcase_id } = useParams();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="showcaseFocused__container">
      <div className="topbar">
        <div>
          <h1>
            Showcase: <span style={{ color: "#ee5253" }}>{showcase_id}</span>
          </h1>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Playpoint
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Showcases
            </Link>
            <Typography color="text.primary">22 July, 2022</Typography>
          </Breadcrumbs>
        </div>

        {/* <Button>
          <i className="ri-message-3-line"></i> Join Conversation
        </Button> */}
      </div>

      <div className="main">
        <div className="onlineUsers">
          <div className="top">
            <div className="title">
              <h3>Online Users</h3>
              <p>
                <i className="ri-user-line"></i> 12 Participants
              </p>
            </div>
            <div className="searchUser">
              <i className="ri-search-line"></i>
              <input placeholder="Search User" />
            </div>

            <div className="activeUsers">
              <div className="user">
                <div className="userDetails">
                  <div className="image">
                    <img
                      src="https://images.unsplash.com/photo-1658516098941-b4a0d4f3d0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="user"
                    />

                    <div className="greenDot"></div>
                  </div>
                  <p>0xjhsdg...svds</p>
                </div>

                <Button className="chatBtn">
                  <i className="ri-message-3-line"></i>
                </Button>
              </div>
              <div className="user">
                <div className="userDetails">
                  <div className="image">
                    <img
                      src="https://images.unsplash.com/photo-1658516098941-b4a0d4f3d0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="user"
                    />

                    <div className="greenDot"></div>
                  </div>
                  <p>0xjhsdg...svds</p>
                </div>

                <Button className="chatBtn">
                  <i className="ri-message-3-line"></i>
                </Button>
              </div>
              <div className="user">
                <div className="userDetails">
                  <div className="image">
                    <img
                      src="https://images.unsplash.com/photo-1658516098941-b4a0d4f3d0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="user"
                    />

                    <div className="greenDot"></div>
                  </div>
                  <p>0xjhsdg...svds</p>
                </div>

                <Button className="chatBtn">
                  <i className="ri-message-3-line"></i>
                </Button>
              </div>
              <div className="user">
                <div className="userDetails">
                  <div className="image">
                    <img
                      src="https://images.unsplash.com/photo-1658516098941-b4a0d4f3d0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="user"
                    />

                    <div className="greenDot"></div>
                  </div>
                  <p>0xjhsdg...svds</p>
                </div>

                <Button className="chatBtn">
                  <i className="ri-message-3-line"></i>
                </Button>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="info">
              <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
              <div>0xjhsd...sdvdsvds</div>
            </div>
            <Button>
              <i className="ri-settings-2-line"></i>
            </Button>
          </div>
        </div>
        <div className="scoreboard">
          <div className="competitor">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
                loading="lazy"
                alt=""
              />
              <div>Chelsea</div>
            </div>
            <span>0 - 1</span>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
                loading="lazy"
                alt=""
              />
              <div>FCB</div>
            </div>
          </div>
        </div>
        <div className="conversation">
          <div className="title">
            <h3>Live Conversations</h3>
          </div>

          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Duo"
                  icon={<i className="ri-group-line"></i>}
                  {...a11yProps(0)}
                />
                <Tab
                  label="Trio"
                  icon={<i className="ri-team-line"></i>}
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <TabPanel className="chatBox" value={value} index={0}>
              <div className="messageContainer">
                <div className="awayMessage">
                  <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
                  <div className="message">How you doin mates!</div>
                </div>
                <div className="awayMessage">
                  <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
                  <div className="message">All good! What you think of this game?</div>
                </div>
                <div className="homeMessage">
                  <div className="message">
                    Hello World, I guess this game is real good, wy say guys?
                  </div>
                  <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
                </div>

                <div className="awayMessage">
                  <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
                  <div className="message">Hello World!</div>
                </div>
              </div>
              <div className="messageInput">
                <input type="text" placeholder="Enter Message..." />
                <Button>
                  <i className="ri-send-plane-fill"></i>
                </Button>
              </div>
            </TabPanel>
            <TabPanel className="chatBox" value={value} index={1}>
            <div className="messageContainer">
                <div className="awayMessage">
                  <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
                  <div className="message">How you doin mates!</div>
                </div>
                <div className="awayMessage">
                  <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
                  <div className="message">All good! What you think of this game?</div>
                </div>
                <div className="homeMessage">
                  <div className="message">
                    Hello World, I guess this game is real good, wy say guys?
                  </div>
                  <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
                </div>

                <div className="awayMessage">
                  <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
                  <div className="message">Hello World!</div>
                </div>
              </div>
              <div className="messageInput">
                <input type="text" placeholder="Enter Message..." />
                <Button>
                  <i className="ri-send-plane-fill"></i>
                </Button>
              </div>
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
}
