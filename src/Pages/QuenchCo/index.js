import React, {Fragment} from "react";
import { Container } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import ContactUsSection from "../../Components/ContactUsSection";
const QuenchCo = () => {
  return (
    <Fragment>
    <Container>
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
            Hairburst
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
            Seller Interactive brings Quench Co to the clear water with its
            Optimization and Advertisement Services.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="subtitle1" sx={{fontWeight:600, backgroundColor:"red", color:"white", paddingLeft:2, paddingTop:1, paddingBottom:0.5, width:"28%", marginLeft:"auto",marginTop:-5}}>HOW WE HELPED</Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, textAlign: "right", marginTop:2 }}>
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

      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Reaping Results
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            With the PPC campaign launched this month, the already increasing
            trend is expected to continue rising and is forecasted to create a
            steeper upward curve. There has been a 19% month over month growth
            from July to August, 43% increase on page views, and 20% increase on
            total ordered items.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3, fontWeight: 600 }}
          >
            Quench Co has expressed their delight with Seller Interactive's
            performance as early as the presentation of the initial slide for
            the listing images. The client also expressed their satisfaction
            with the overall listing optimization and PPC campaign conducted by
            the SI team.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/quenchco3.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          style={{ borderRadius: "2%" }}
          src={"/quenchco4.png"}
          width={"50%"}
          alt={"Addian Management"}
        />
      </div>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        The Seller Interactive Difference
      </Typography>
      <Typography variant="subtitle1" sx={{marginTop:3}}>
        Let the resident experts at Seller Interactive take care of the
        nitty-gritty behind your business so you can focus on the more essential
        things. With its spotless record of efficiency and productivity, you can
        be sure that your business is in good hands.
      </Typography>
      <Typography variant="subtitle1" sx={{marginTop:2}}>
        Contact Jayce at hello@sellerinteractive.ca today so we can start
        setting your business up for greater heights.
      </Typography>
      <ContactUsSection />
    </Box>
    </Container>
    </Fragment>
  );
};

export default QuenchCo;
