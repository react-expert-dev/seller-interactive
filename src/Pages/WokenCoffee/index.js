import React from "react";
import { Box, Grid, Typography } from "@mui/material";
const WokenCoffee = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/gatorcable1.svg"}
            width={"100%"}
            alt={"Addian Management"}
          />
          <Typography variant="h1" sx={{ position: "relative", top: -200 }}>
            Wokken Coffee
          </Typography>
          <Typography variant="h2" sx={{ position: "relative", top: -200 }}>
            Case Study.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}></Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: -20 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h5" sx={{ lineHeight: 1.5 }}>
            How Woken Climbed 10,000 steps up Amazon’s Search Ranking through
            Seller Interactive’s Seller Effective Account Management.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              backgroundColor: "red",
              color: "white",
              paddingLeft: 2,
              paddingTop: 1,
              paddingBottom: 0.5,
              width: "28%",
              marginLeft: "auto",
              marginTop: -5,
            }}
          >
            HOW WE HELPED
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, textAlign: "right", marginTop: 2, paddingLeft:20 }}
          >
           INCREASED SALES FROM $12K TO $14K IN JUST ONE MONTH
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WokenCoffee;
