import React from "react";
import "./styles/style.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import LiveMatchCard from "../../components/LiveMatchCard";
import { Button } from "@mui/material";

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

export default function Showcases() {
  const [value, setValue] = React.useState(new Date());

  function handleClick(event) {
    event.preventDefault();
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // setup for upcoming match table
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

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
          <LiveMatchCard />
          <LiveMatchCard />
          <LiveMatchCard />
          <LiveMatchCard />
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
              inputFormat="MM/dd/yyyy"
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
                <StyledTableCell>Match Name</StyledTableCell>
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
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Button className="matchName">
                      <span>Chelsea</span>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
                        alt=""
                      />
                      <span>vs</span>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
                        alt=""
                      />
                      <span>Football Club Barcelona</span>
                    </Button>
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">22 July, 2022, 5AM GST</TableCell>
                  <TableCell align="center" className="actions">
                    <Button>Predict Now</Button>
                    <Button>Leaderboards</Button>
                    <Button>Join Chat</Button>
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
