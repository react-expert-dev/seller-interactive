import { Container } from "@mui/material";
import React, { Fragment } from "react";

//user import

import { Hero, OurPartners, WorldBrands } from "./components";

//component

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Container>
        <WorldBrands />
        <OurPartners />
      </Container>
    </Fragment>
  );
};

export default Home;
