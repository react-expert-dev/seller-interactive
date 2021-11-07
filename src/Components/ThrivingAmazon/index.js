import React from "react";
import { Button, Box, Grid, Typography } from "@mui/material";
import { Root_Routes } from "../../Services/Routes/APP";
import { useHistory } from "react-router-dom";
import "./style.css"
const ThrivingAmazon = () => {
  const history = useHistory();
  const clickHandler = (href) => {
    history.push(href);   
  };
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
            <Grid item xs={12} sm={12} md={8} lg={8} sx={8}>
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
                className="thrivingAmazonContent"
              >
                Use the power and influence of advertising to increase sales.
                Learn more about how you can benefit from our management
                expertise.
              </Typography>
              <Button
                variant="contained"
                onClick={() => clickHandler(Root_Routes?.contact_us)}
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
