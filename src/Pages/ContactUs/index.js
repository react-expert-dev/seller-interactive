import React from "react";

//package import

import { OutlinedInput, Button, Grid, Typography, Box } from "@mui/material";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";

//user import

import WorldBrands from "../../Components/WorldBrands";

//component

const ContactUs = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} sx={{ marginBottom: 5 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{
              marginTop: 10,
              fontWeight: 800,
            }}
          >
            Contact Us.
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Let us get to know you better.
          </Typography>{" "}
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ marginTop: -1 }}
          >
            Book a free 15-minute Amazon Seller account audit with our
            consultants.
          </Typography>{" "}
          <Typography variant="subtitle1" gutterBottom component="div">
            During your 1 on 1 call, our consultants will:
          </Typography>
          <ul style={{ lineHeight: 1.5 }}>
            <li>Discuss ways we can meet your business goals</li>
            <li>Perform an Amazon brand and competitor analysis</li>
            <li>Show how our expertise can help you kickstart your sales</li>
          </ul>
          <div style={{ display: "flex" }}>
            <OutlinedInput
              placeholder="Enter Your Email"
              sx={{ width: "60%", borderRadius: 3 }}
            />
            <Button
              style={{ marginLeft: -20 }}
              variant="contained"
              sx={{
                borderRadius: 3,
                width: "30%",
              }}
            >
              Get in touch
            </Button>
          </div>
        </Grid>
      </Grid>
      <WorldBrands />
      <Box bgcolor={"#f7f9fa"} paddingY={{ md: 2, sm: 1.5, xs: 1 }}>
        <Typography
          variant="h2"
          gutterBottom
          component="div"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Ways to contact us.
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: 5, marginBottom: 10 }}>
          <Grid item xs={12} sm={12} md={4} lg={4} sx={{ textAlign: "center" }}>
            <MarkunreadIcon sx={{ fontSize: 40 }} />
            <Typography variant="h5">Email us:</Typography>
            <Typography variant="subtitle1">
              hello@sellerinteractive.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} sx={{ textAlign: "center" }}>
            <CallIcon sx={{ fontSize: 40 }} />
            <Typography variant="h5">Call us:</Typography>
            <Typography variant="subtitle1">1-800-820-3746</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} sx={{ textAlign: "center" }}>
            <HomeIcon sx={{ fontSize: 40 }} />
            <Typography variant="h5">Find us:</Typography>
            <Typography
              variant="subtitle1"
              sx={{ paddingLeft: 10, paddingRight: 10 }}
            >
              7676 Woodbine Ave #2 Markham, ON, L3R 2N2 Canada
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ paddingLeft: 10, paddingRight: 10 }}
            >
              226 Park Ave S #82849 New York, NY 10003 United States
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
