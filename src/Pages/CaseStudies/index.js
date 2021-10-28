import React, { Fragment } from "react";
import { Container } from "@mui/material";
import Link from "@mui/material/Link";
import {
  OutlinedInput,
  Button,
  Grid,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import "./style.css";

//constants

const successStories = [
  {
    id: `success-story-1`,
    url: "/casestudy1.png",
    imgText: "Addian Management",
    cardtext: "Gator Cable",
    redirectUrl: "./gator_cable",
  },
  {
    id: `success-story-2`,
    url: "/casestudy2.jpg",
    imgText: "Hair Brust",
    cardtext: "Hair Burst",
    redirectUrl: "./hair_burst",
  },
  {
    id: `success-story-3`,
    url: "/casestudy3.jpg",
    imgText: "Hair Brust",
    cardtext: "Quench Co",
    redirectUrl: "./quench_co",
  },
  {
    id: `success-story-4`,
    url: "/casestudy4.jpg",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
    redirectUrl: "./solo_nutrition",
  },
  {
    id: `success-story-5`,
    url: "/casestudy5.png",
    imgText: "Hair Brust",
    cardtext: "Woken Coffee",
    redirectUrl: "./woken_coffee",
  },
  {
    id: `success-story-6`,
    url: "/casestudy6.png",
    imgText: "Hair Brust",
    cardtext: "Tribella",
    redirectUrl: "./tribella",
  },
  {
    id: `success-story-7`,
    url: "/casestudy7.png",
    imgText: "Hair Brust",
    cardtext: "Guardian Athletic",
    redirectUrl: "./gaurdian_athletic",
  },
  {
    id: `success-story-8`,
    url: "/casestudy8.jpg",
    imgText: "Hair Brust",
    cardtext: "Vortex Enterprise",
    redirectUrl: "./vortex_enterprise",
  },
];

//component

const CaseStudies = () => {
  //hooks

  const theme = useTheme();

  //render

  return (
    <Fragment>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={8}>
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{
                  fontWeight: 800,
                }}
              >
                Case Studies.
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Seller Interactive has helped clients increase sales through
                listing optimization, improved conversion rates, brand
                protection, design, and so much more.
              </Typography>{" "}
              <Typography variant="subtitle1" gutterBottom component="div">
                See our collection of success stories of how we support our
                clients through common Amazon challenges (account suspension,
                hijackers, low account health) and achieve brand success.
              </Typography>
            </Grid>
            <Grid item xs={false} md={4} lg={4}></Grid>
          </Grid>
          <Grid
            container
            spacing={7}
            direction="row"
            justifyContent="center"
            sx={{ marginTop: 1 }}
          >
            {successStories?.map((sucess, index) => (
              <Grid
                item
                xs={12}
                md={4}
                sm={12}
                lg={4}
                key={`${index}-success-story-${sucess?.id}`}
              >
                <Link href={sucess?.redirectUrl} underline="none">
                  <Box
                    sx={{
                      border: 1,

                      borderRadius: 2,
                    }}
                  >
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <Box
                            sx={{
                              padding: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "90%",
                              height: "90%",
                            }}
                          >
                            <Box width={200}>
                              <img
                                width={"100%"}
                                src={sucess?.url}
                                alt={sucess?.imgText}
                              />
                            </Box>
                          </Box>
                        </div>
                        <div className="flip-card-back">
                          <Typography
                            variant="h3"
                            sx={{ fontWeight: 800, marginTop: 13 }}
                          >
                            {sucess?.cardtext}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>

          <div style={{ width: "100%", marginTop: 30 }}>
            <Grid container spacing={1}>
              <Grid item xs={1}></Grid>
              <Grid item xs={12} sm={12} md={10} lg={10}>
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
              <Grid item xs={12} sm={12} md={6} lg={6}>
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
                  <li>
                    Show how our expertise can help you kickstart your sales
                  </li>
                </ul>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={3}
                sx={{
                  marginTop: 5,
                }}
              >
                <Typography variant="h6" gutterBottom component="div">
                  Email *
                </Typography>
                <OutlinedInput
                  placeholder="Enter email"
                  sx={{ width: "100%" }}
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
          <Box></Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default CaseStudies;
