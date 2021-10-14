import React from "react";
import { Button, Box, Grid, Typography } from "@mui/material";
const ThrivingAmazon = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#fb3767",
            backgroundImage: `url(${"/amazonbg.png"})`,
            borderRadius: 3,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              textAlign: "center",
              color: "#ffffff",
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  fontWeight: 800,
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                Go from surviving to thriving on Amazon.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ marginTop: 3, paddingLeft: 10, paddingRight: 10 }}
              >
                Use the power and influence of advertising to increase sales.
                Learn more about how you can benefit from our management
                expertise.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: 6,
                }}
              >
                Talk to us
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThrivingAmazon;
