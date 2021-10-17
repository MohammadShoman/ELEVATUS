import "./App.css";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddItem from "./components/add";
import Logo from './../src/logo.png'
function App() {
  return (
    <div className="App">
      <AppBar position="static" style={{ background: 'black' }}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="white" component="div">
              <img src={Logo} style={{width:"150px",height:"50px",marginLeft:"40px"}} />
            </Typography>
          </Toolbar>
        </AppBar>
      <AddItem/>
    </div>
  );
}

export default App;
