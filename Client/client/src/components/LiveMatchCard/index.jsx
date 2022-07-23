import React from "react";
import './styles/style.css'
import {Button} from '@mui/material'
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export default function LiveMatchCard({match}) {
  const {seasonName, challengers} = match;

  return (
    <div className="liveMatchCard__container">
      <div className="absoluteLiveBanner">Live</div>
      <div className="competitors">
        <img
          src={challengers.home.logo}
          alt=""
          loading="lazy"
        />
        <span>vs</span>
        <img
          src={challengers.away.logo}
          alt=""
          loading="lazy"
        />
      </div>

      <span className="sportCategory">
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="#0006">Football</Typography>
          <Typography color="text.primary">{seasonName}</Typography>
        </Breadcrumbs>
      </span>

      <div className="gameScoreStatus">
        <div className="item">
          <h4>{challengers.home.challengerName}</h4>
          <h3>{challengers.home.score}</h3>
        </div>
        <div className="item">
          <h4>{challengers.away.challengerName}</h4>
          <h3>{challengers.away.score}</h3>
        </div>
      </div>

      <div className="userControls">
        <Button><i className="ri-bubble-chart-line"></i> Leaderboard</Button>
        <Button><i className="ri-chat-poll-line"></i> Chat Room</Button>
      </div>
    </div>
  );
}
