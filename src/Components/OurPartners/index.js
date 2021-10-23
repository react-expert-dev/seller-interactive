import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./style.css"
const OurPartners = () => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        sx={{
          fontWeight: 400,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Our Partners
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <img
            src={"/ourstory3.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={2}>
          <img
          className="ourPartnersImage1"
            src={"/ourstory4.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={2} >
          <img
           className="ourPartnersImage2"
            src={"/ourstory5.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={2}>
          <img
            src={"/ourstory6.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={2}>
          <img
           className="ourPartnersImage3"
            src={"/ourstory7.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
};

export default OurPartners;
