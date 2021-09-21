import React from "react";

//package import

import { BrowserRouter as Router } from "react-router-dom";

//user import

import { Routes } from "./Routes";

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
