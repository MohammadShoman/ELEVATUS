import "./App.css";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddItem from "./components/add";
import Logo from './../src/20200101_Logo_EL_02.png'
function App() {
  return (
    <div className="App">
      <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="white" component="div">
              <img src={Logo} style={{width:"150px",height:"50px", marginTop:"20px"}}/>
            </Typography>
          </Toolbar>
        </AppBar>
      <AddItem/>
    </div>
  );
}

export default App;
