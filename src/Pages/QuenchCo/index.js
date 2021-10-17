import React from "react";
import { Box, Grid, Typography } from "@mui/material";
const QuenchCo = () => {
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
          <Typography
            variant="h1"
            sx={{ position: "relative", top: -200 }}
          >
            Hairburst
          </Typography>
          <Typography
            variant="h2"
            sx={{ position: "relative", top: -200 }}
          >
            Case Study.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}></Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: -20 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h5" sx={{ lineHeight: 1.5 }}>
            Seller Interactive brings Quench Co to the clear water with its
            Optimization and Advertisement Services.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h4" sx={{ fontWeight: 800, textAlign: "right" }}>
            20% INCREASE ON TOTAL ORDERED ITEMS
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Quench Co is a digital marketing agency that offers branding and
            distribution services to beverage companies. Quench Co is involved
            in all things selling - from visual identity, packaging, to social
            media and e-commerce marketing. With numerous brands under its belt,
            Quench Co needed a hand in managing its listings and advertisements.
            Enter Seller Interactive.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Quench Co is a digital marketing agency that offers branding and
            distribution services to beverage companies. Quench Co is involved
            in all things selling - from visual identity, packaging, to social
            media and e-commerce marketing. With numerous brands under its belt,
            Quench Co needed a hand in managing its listings and advertisements.
            Enter Seller Interactive.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Overcoming Challenges
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Seller Interactive's SEO experts know that it takes more than just
            setting up a PPC advertisement to get tangi-ble results, which is
            why from June 17 to July 11, Seller Interactive focused on Listing
            Optimization. This includes listing images and copies, improving
            brand store images, and developing A+ images and copies.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3, fontWeight: 600 }}
          >
            Seller Interactive's staff were efficient enough to finish the
            Listing Optimization ahead of the projected one-month timeline, with
            constant communication between the team and the client.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3, fontWeight: 600 }}
          >
            The listings were fixed, the products were linked to the store, and
            optimized images and copies were uploaded for each listing.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3, fontWeight: 600 }}
          >
            As a result, the PPC campaign was launched on August 4 and is still
            working its magic as we speak.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <img
            style={{ borderRadius: "2%" }}
            src={"/quenchco1.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          style={{ borderRadius: "2%" }}
          src={"/quenchco2.png"}
          width={"80%"}
          alt={"Addian Management"}
        />
      </div>
    </Box>
  );
};

export default QuenchCo;
