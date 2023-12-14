import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import "./CreateContract.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import Container from '@mui/material/Container';



function CreateContract() {
  const [currentPage, setCurrentPage] = useState(0);

  const [personInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dob: {},
    address: "",
  });

  const [gameInfo, setGameInfo] = useState({
    gameTitle: "",
    genre: "",
    releaseDate: "",
    platform: "",
    signingBonus: "",
    equipment: "",
  });

  const [contractInfo, setContractInfo] = useState({
    contractTitle: "",
    contractDescription: "",
    startDate: "",
    endDate: "",
  });
  const handlePersonInfoChange = (e) => {
    const { name, value } = e.target;
    if (name === "dob") {
      const dateOnly = JSON.stringify(value).split("T")[0].substring(1);
      setPersonInfo({ ...personInfo, [name]: dateOnly });
    } else {
      setPersonInfo({ ...personInfo, [name]: value });
    }
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    if (name === "releaseDate") {
      const only = JSON.stringify(value).split("T")[0].substring(1);
      console.log("<<<<<<<<<", dayjs(value), "vs", value);
      setGameInfo({ ...gameInfo, [name]: only });
    } else {
      setGameInfo({ ...gameInfo, [name]: value });
    }
  };

  const handleContractInfoChange = (e) => {
    const { name, value } = e.target;
    if (name === "startDate" || name === "endDate") {
      const only = JSON.stringify(value).split("T")[0].substring(1);
      console.log("<<<<<<<<<", dayjs(value), "vs", value);
      setContractInfo({ ...contractInfo, [name]: only });
    } else {
      setContractInfo({ ...contractInfo, [name]: value });
    }
  };

  const handleSlideChange = (index) => {
    setCurrentPage(index);
  };
  const handleSubmitPersonInfo = (e) => {
    e.preventDefault();
    console.log("!!!!!!");
    const isFilled = Object.values(personInfo).every((value) => value !== "");
    if (isFilled) {
      setCurrentPage(1);
      console.log("All fields filled:", personInfo);
    } else {
      console.log("Some fields are empty:", personInfo);
    }
  };

  const handleSubmitGameInfo = (e) => {
    e.preventDefault();
    const isFilled = Object.values(gameInfo).every((value) => value !== "");
    if (isFilled) {
      setCurrentPage(2);
      console.log("All fields filled:", gameInfo);
    } else {
      console.log("Some fields are empty:", gameInfo);
    }
  };

  const handleSubmitContractInfo = (e) => {
    e.preventDefault();
    const isFilled = Object.values(contractInfo).every((value) => value !== "");
    if (isFilled) {
      setCurrentPage(3);
      console.log("All fields filled:", personInfo);
      console.log("All fields filled:", gameInfo);
      console.log("All fields filled:", contractInfo);
    } else {
      console.log("Some fields are empty:", contractInfo);
    }
  };

  const takeToSign = () => {
    const url = 'http://localhost:3000/sign';
    window.open(url, '_blank');
};
const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    
    <div className="contract-page">
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="create"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Name
          </Typography>
      

          
         
          

        </Toolbar>
      </Container>
    </AppBar>
  <Typography variant="h3">Create Contract</Typography>
 
      <div className="carousel-container">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          onChange={handleSlideChange}
          selectedItem={currentPage}
        >
          <div className="carousel-page">
            <h2>Person Information</h2>

            <Box
              onSubmit={handleSubmitPersonInfo}
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="on"
            >
              <div>
                <TextField
                  id="name"
                  label="Name"
                  name="name"
                  multiline
                  maxRows={4}
                  inputProps={{
                    autoComplete: "on",
                  }}
                  value={personInfo.name || ""}
                  onChange={handlePersonInfoChange}
                />
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  multiline
                  maxRows={4}
                  value={personInfo.email || ""}
                  onChange={handlePersonInfoChange}
                />
                <TextField
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  multiline
                  maxRows={4}
                  value={personInfo.phoneNumber || ""}
                  onChange={handlePersonInfoChange}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    type="text"
                    name="dob"
                    label="Date of Birth"
                    value={contractInfo.dob || null}
                    onChange={(date) =>
                      handlePersonInfoChange({
                        target: { name: "dob", value: date },
                      })
                    }
                  />
                </LocalizationProvider>

                <TextField
                  id="outlined-multiline-flexible"
                  label="Address"
                  name="address"
                  type="tel"
                  multiline
                  maxRows={4}
                  value={personInfo.address || ""}
                  onChange={handlePersonInfoChange}
                />
              </div>
              <Button type="submit" variant="outlined" size="large">
                Next
              </Button>
            </Box>
          </div>

          <div className="carousel-page">
            <h2>Game Details</h2>

            <Box
              onSubmit={handleSubmitGameInfo}
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="on"
            >
              <div>
                <TextField
                  id="gameTitle"
                  label="Game Title"
                  name="gameTitle"
                  multiline
                  maxRows={4}
                  value={gameInfo.gameTitle}
                  onChange={handleGameInfoChange}
                />
                <TextField
                  id="genre"
                  label="Genre"
                  name="genre"
                  multiline
                  maxRows={4}
                  value={gameInfo.genre}
                  onChange={handleGameInfoChange}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="releaseDate"
                    label="Release Date"
                    name="releaseDate"
                    value={gameInfo.releaseDate || null}
                    onChange={(date) =>
                      handleGameInfoChange({
                        target: { name: "releaseDate", value: date },
                      })
                    }
                  />
                </LocalizationProvider>
                <TextField
                  id="platform"
                  label="Platform"
                  name="platform"
                  size="large"
                  multiline
                  maxRows={4}
                  value={gameInfo.platform}
                  onChange={handleGameInfoChange}
                />
                <TextField
                  id="signingBonus"
                  label="Signing Bonus"
                  name="signingBonus"
                  multiline
                  maxRows={4}
                  value={gameInfo.signingBonus}
                  onChange={handleGameInfoChange}
                />
                <TextField
                  id="equipment"
                  label="Equipment"
                  name="equipment"
                  multiline
                  maxRows={4}
                  value={gameInfo.equipment}
                  onChange={handleGameInfoChange}
                />
              </div>
              <Button type="submit" variant="outlined" size="large">
                Next
              </Button>
            </Box>
          </div>

          <div className="carousel-page">
            <h2>Contract Info</h2>
            <Box
              onSubmit={handleSubmitContractInfo}
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Contract Title"
                  multiline
                  maxRows={4}
                  name="contractTitle"
                  value={contractInfo.contractTitle || ""}
                  onChange={handleContractInfoChange}
                />

                <TextField
                  id="outlined-multiline-static"
                  label="Contract Description"
                  multiline
                  rows={4}
                  name="contractDescription"
                  value={contractInfo.contractDescription || null}
                  onChange={handleContractInfoChange}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="startDate"
                    label="Start Date"
                    type="text"
                    value={contractInfo.startDate || null}
                    onChange={(date) =>
                      handleContractInfoChange({
                        target: { name: "startDate", value: date },
                      })
                    }
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    type="text"
                    name="endDate"
                    label="End Date"
                    value={contractInfo.endDate || null}
                    onChange={(date) =>
                      handleContractInfoChange({
                        target: { name: "endDate", value: date },
                      })
                    }
                  />
                </LocalizationProvider>
              </div>
              <Button type="submit" variant="outlined" size="large" onClick={takeToSign}>
                sign
              </Button>
            </Box>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default CreateContract;
