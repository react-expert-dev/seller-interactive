import React from "react";

//package import

import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { Root_Routes } from "../../../Services/Routes/APP";
import { useHistory } from "react-router-dom";
//component

const Hero = () => {
  const history = useHistory();

  const clickHandler = (href) => {
    history.push(href);
  };
  return (
    <Container>
      <Grid container>
        <Grid xs={12} sm={12} md={6}>
          <Box
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box>
              <Typography variant={"h3"} fontWeight={"bold"} gutterBottom>
                Get ahead on Amazon{" "}
                <Typography component={"span"} color={"primary"}>
                  .
                </Typography>
              </Typography>
            </Box>
            <Box>
              <Typography variant={"body1"}>
                Take your business to the next level with Seller Interactive.
                Get managed services by our Amazon experts.
              </Typography>
            </Box>
            <Box mt={2}>
              <Button
                variant={"contained"}
                color={"primary"}
                href="/contact_us"
                onClick={() => clickHandler(Root_Routes?.contact_us)}
                sx={{
                  paddingX: 4,
                  paddiingY: 0.5,
                }}
              >
                Schedule a free consultation
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <Box marginTop={{ xs: 2, sm: 2, md: 0 }} padding={2}>
            <img
              src={"/images/Home/hero-image.jpg"}
              alt={"hero-image"}
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: 10 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
