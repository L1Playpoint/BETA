import React from "react";
import './styles/style.css'
import {Button} from '@mui/material'
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export default function LiveMatchCard() {
  return (
    <div className="liveMatchCard__container">
      <div className="absoluteLiveBanner">Live</div>
      <div className="competitors">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
          alt=""
        />
        <span>vs</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
          alt=""
        />
      </div>

      <span className="sportCategory">
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="#0006">Football</Typography>
          <Typography color="text.primary">La Liga</Typography>
        </Breadcrumbs>
      </span>

      <div className="gameScoreStatus">
        <div className="item">
          <h3>Chelsea</h3>
          <h3>1</h3>
        </div>
        <div className="item">
          <h3>FCB</h3>
          <h3>3</h3>
        </div>
      </div>

      <div className="userControls">
        <Button>Leaderboards</Button>
        <Button>Join Chat Room</Button>
      </div>
    </div>
  );
}
