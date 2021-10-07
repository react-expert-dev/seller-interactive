import React from "react";
import {
  OutlinedInput,
  Button,
  Grid,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

//constants

const successStories = [
  {
    id: `success-story-1`,
    url: "/casestudy1.png",
    imgText: "Addian Management",
  },
  {
    id: `success-story-2`,
    url: "/casestudy2.jpg",
    imgText: "Hair Brust",
  },
  {
    id: `success-story-3`,
    url: "/casestudy3.jpg",
    imgText: "Hair Brust",
  },
  {
    id: `success-story-4`,
    url: "/casestudy4.jpg",
    imgText: "Hair Brust",
  },
  {
    id: `success-story-5`,
    url: "/casestudy5.png",
    imgText: "Hair Brust",
  },
  {
    id: `success-story-6`,
    url: "/casestudy6.png",
    imgText: "Hair Brust",
  },
  {
    id: `success-story-7`,
    url: "/casestudy7.png",
    imgText: "Hair Brust",
  },
  {
    id: `success-story-8`,
    url: "/casestudy8.jpg",
    imgText: "Hair Brust",
  },
];

//component

const CaseStudies = () => {
  //hooks

  const theme = useTheme();

  //render

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
        <Grid item xs={false} md={4} lg={4}></Grid>
      </Grid>
      <Grid
        container
        spacing={7}
        direction="row"
        justifyContent="center"
        sx={{marginTop:1}}
      >
        {successStories?.map((sucess, index) => (
          <Grid item xs={4}  key={`${index}-success-story-${sucess?.id}`} >
            <Box
              sx={{
                border: 1,
                width: "100%",
                height: "100%",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                
              }}
            >
              <img
                style={{
                  padding: 10,
                  width: "75%",
                  marginLeft: 30,
                  marginBottom: 20,
                  marginTop: 20,
                }}
                src={sucess?.url}
                alt={sucess?.imgText}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <div style={{ width: "100%", marginTop:30}}>
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

        <Grid container spacing={1} sx={{ marginBottom: 10 }}>
          <Grid item xs={6}>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{
                marginTop: 5,
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
              Book a free Amazon Seller account audit with our consultants.
            </Typography>{" "}
            <Typography variant="h6" gutterBottom component="div">
              During your audit our consultants will:
            </Typography>
            <ul style={{ lineHeight: 1.5 }}>
              <li>Discuss ways we can meet your business goals</li>
              <li>Perform an Amazon brand and competitor analysis</li>
              <li>Show how our expertise can help you kickstart your sales</li>
            </ul>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              marginTop: 5,
            }}
          >
            <Typography variant="h6" gutterBottom component="div">
              Email *
            </Typography>
            <OutlinedInput placeholder="Enter email" sx={{ width: "100%" }} />
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
