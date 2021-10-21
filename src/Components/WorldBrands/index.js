import React, { Fragment } from "react";

import { Typography, Grid } from "@mui/material";

const WorldBrand = () => {
  return (
    <Fragment>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{
          fontWeight: 400,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Trusted by brands around the world
      </Typography>
      <Grid container spacing={1} sx={{ marginTop: 5, textAlign: "center" }}>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <img
            src={"/contactus1.png"}
            width={"70%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <img
            src={"/contactus2.png"}
            width={"80%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <img
            src={"/contactus3.png"}
            width={"60%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <img
            src={"/contactus4.png"}
            width={"40%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <img
            src={"/contactus5.png"}
            width={"60%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <img
            src={"/contactus9.png"}
            width={"70%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ marginTop: 5, textAlign: "center" }}>
        <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <img
            src={"/contactus7.png"}
            width={"70%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <img
            src={"/contactus8.png"}
            width={"30%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
      </Grid>
    </Fragment>
  );
};

export default WorldBrand;
