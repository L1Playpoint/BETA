import React from "react";
import "./styles/style.css";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";

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

        <Button><i className="ri-message-3-line"></i> Join Conversation</Button>
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
    </div>
  );
}
