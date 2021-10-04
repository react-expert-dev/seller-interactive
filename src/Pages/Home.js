import React from "react";
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/ourstory" ><Typography >Our Story</Typography></Link>
    </div>
  );
};

export default Home;
