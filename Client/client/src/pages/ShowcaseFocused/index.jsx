import React from "react";
import "./styles/style.css";
import { Breadcrumbs, Link, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ShowcaseFocused() {
  const { showcase_id } = useParams();
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
          <h2>Online Users</h2>
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
                <p>Suraj Gaire</p>
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
                <p>Suraj Gaire</p>
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
                <p>Suraj Gaire</p>
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
                <p>Suraj Gaire</p>
              </div>

              <Button className="chatBtn">
                <i className="ri-message-3-line"></i>
              </Button>
            </div>
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
          <h2>Live Conversations</h2>
        </div>
      </div>
    </div>
  );
}
