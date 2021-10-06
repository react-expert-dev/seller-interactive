import React from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
const CaseStudies = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={8}>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{
              marginTop: 10,
              fontWeight: 800,
            }}
          >
            Case Studies.
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Seller Interactive has helped clients increase sales through listing
            optimization, improved conversion rates, brand protection, design,
            and so much more.
          </Typography>{" "}
          <Typography variant="subtitle1" gutterBottom component="div">
            See our collection of success stories of how we support our clients
            through common Amazon challenges (account suspension, hijackers, low
            account health) and achieve brand success.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4}></Grid>
      </Grid>
      <Grid container spacing={6} sx={{ marginTop: 3 }}>
        <Grid item xs={4}>
          <Box
            sx={{ border: 1, width: "100%", height: "100%", borderRadius: 2 }}
          >
            <img
              style={{
                padding: 10,
                width: "75%",
                marginLeft: 30,
                marginBottom: 20,
                marginTop: 20,
              }}
              src={"/casestudy1.png"}
              alt={"Addian Management"}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{ border: 1, width: "100%", height: "100%", borderRadius: 2 }}
          >
            <img
              style={{
                padding: 10,
                width: "75%",
                marginLeft: 30,
                marginBottom: 20,
                marginTop: 20,
              }}
              src={"/casestudy1.png"}
              alt={"Addian Management"}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{ border: 1, width: "100%", height: "100%", borderRadius: 2 }}
          >
            <img
              style={{
                padding: 10,
                width: "75%",
                marginLeft: 30,
                marginBottom: 20,
                marginTop: 20,
              }}
              src={"/casestudy1.png"}
              alt={"Addian Management"}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={6} sx={{ marginTop: 3 }}>
        <Grid item xs={4}>
          <Box
            sx={{ border: 1, width: "100%", height: "100%", borderRadius: 2 }}
          >
            <img
              style={{
                padding: 10,
                width: "75%",
                marginLeft: 30,
                marginBottom: 20,
                marginTop: 20,
              }}
              src={"/casestudy1.png"}
              alt={"Addian Management"}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{ border: 1, width: "100%", height: "100%", borderRadius: 2 }}
          >
            <img
              style={{
                padding: 10,
                width: "75%",
                marginLeft: 30,
                marginBottom: 20,
                marginTop: 20,
              }}
              src={"/casestudy1.png"}
              alt={"Addian Management"}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{ border: 1, width: "100%", height: "100%", borderRadius: 2 }}
          >
            <img
              style={{
                padding: 10,
                width: "75%",
                marginLeft: 30,
                marginBottom: 20,
                marginTop: 20,
              }}
              src={"/casestudy1.png"}
              alt={"Addian Management"}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={6} sx={{ marginTop: 3, marginBottom: 5 }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <Box
            sx={{ border: 1, width: "100%", height: "100%", borderRadius: 2 }}
          >
            <img
              style={{
                padding: 10,
                width: "75%",
                marginLeft: 30,
                marginBottom: 20,
                marginTop: 20,
              }}
              src={"/casestudy1.png"}
              alt={"Addian Management"}
            />
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Box
            sx={{ border: 1, width: "100%", height: "100%", borderRadius: 2 }}
          >
            <img
              style={{
                padding: 10,
                width: "75%",
                marginLeft: 30,
                marginBottom: 20,
                marginTop: 20,
              }}
              src={"/casestudy1.png"}
              alt={"Addian Management"}
            />
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <div style={{ width: "100%", backgroundColor: "#FCFCFC" }}>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, textAlign: "center" }}
            >
              Want to be another success story?
            </Typography>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>

        <Grid container spacing={1} sx={{ backgroundColor: "#FCFCFC" }}>
          <Grid item xs={6}>
            <Typography
              variant="h4"
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
            <Typography variant="subtitle1" gutterBottom component="div">
              Book a free Amazon Seller account audit with our consultants.
            </Typography>{" "}
            <Typography variant="h6" gutterBottom component="div">
              During your audit our consultants will:
            </Typography>
            <ul>
              <li>Discuss ways we can meet your business goals</li>
              <li>Perform an Amazon brand and competitor analysis</li>
              <li>Show how our expertise can help you kickstart your sales</li>
            </ul>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              marginTop: 10,
            }}
          >
            <Typography variant="h6" gutterBottom component="div">
              Email *
            </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Button
              variant="contained"
              sx={{
                marginTop: 3,
              }}
            >
              Get in touch
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default CaseStudies;
