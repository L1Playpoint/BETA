import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

/**
 * @package for date time picker
 */
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import LiveMatchCard from "../../components/LiveMatchCard";
import { Button } from "@mui/material";

/**
 * @mocks for live matches
 */
import LiveMatches from "../../mocks/LiveMatches.json";
import UpcomingMatches from "../../mocks/Showcases.json";

/**
 * @packages Components for table => upcoming matches
 */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import "./styles/style.css";
import { useNavigate } from "react-router-dom";

export default function Showcases() {
  const [value, setValue] = React.useState(new Date());
  let navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#f5f6fa",
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <div className="showcase__container">
      <div className="topbar">
        <div className="title">
          <h1>Showcases</h1>
          <div role="presentation" onClick={handleClick}>
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
        </div>

        <div className="filters">
          {/* <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label="Showcase By Date"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
        </div>
      </div>

      {/* live matches */}
      <div className="liveMatches__container">
        <div className="topbar">
          <h2>
            Live <span>Matches</span>
          </h2>
          <Button>
            <i className="ri-list-settings-line"></i> All Live Matches
          </Button>
        </div>

        {/* no more than 4 live matches here */}
        <div className="liveMatch__items">
          {LiveMatches.map((match, index) => (
            <LiveMatchCard match={match} key={index} />
          ))}
        </div>
      </div>

      {/* upcoming matches */}
      <div className="upcomingMatches__container">
        <div className="topbar">
          <h2>
            Upcoming <span>Matches</span>
          </h2>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label="Showcase By Date"
              inputFormat="MMM/dd/yyyy"
              disableMaskedInput
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>S.N.</StyledTableCell>
                <StyledTableCell align="center">Match Name</StyledTableCell>
                <StyledTableCell align="center">
                  Active Predictions
                </StyledTableCell>
                <StyledTableCell align="center">
                  Total Volume (PPTT)
                </StyledTableCell>
                <StyledTableCell align="center">Match Time</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {UpcomingMatches.map((match, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                      <Button className="matchName" onClick={() => navigate(`/showcase/${match.id}`, { replace: true })}>
                        <span>{match.challengers.home.challengerName}</span>
                        <img
                          src={match.challengers.home.logo}
                          alt=""
                          loading="lazy"
                        />
                        <span>vs</span>
                        <img
                          src={match.challengers.away.logo}
                          alt=""
                          loading="lazy"
                        />
                        <span>{match.challengers.away.challengerName}</span>
                      </Button>
                  </TableCell>
                  <TableCell align="center">
                    {match.activePredictions}
                  </TableCell>
                  <TableCell align="center">{match.totalVolume}</TableCell>
                  <TableCell align="center">{match.matchTime}</TableCell>
                  <TableCell align="center" className="actions">
                    <Button>
                      <i className="ri-quill-pen-line"></i> Predict Now
                    </Button>
                    <Button>
                      <i className="ri-bubble-chart-line"></i> Leaderboards
                    </Button>
                    <Button>
                      <i className="ri-chat-poll-line"></i> Join Chat
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
