import React from "react";

//package import
import { BrowserRouter as Router } from "react-router-dom";
import { Toolbar, Container } from "@mui/material";

//user import

import { Routes } from "./Routes";
import { Footer, Topbar } from "./Components";

//component

const App = () => {
  //render

  return (
    <>
    <Router>
      <Topbar />
      <Toolbar />
      <Container>
        <Routes />
      </Container>
      <Footer />
    </Router>
    </>
  );
};

export default App;
