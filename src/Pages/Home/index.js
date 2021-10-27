import React, { Fragment } from "react";
import { Container } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';;
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Button, Grid, Typography, Box} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

//user import

import { Hero, OurPartners, WorldBrands } from "./components";
import LatestPosts from "../../Components/LatestPosts";
import ThrivingAmazon from "../../Components/ThrivingAmazon";

//component

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const successStories = [
  {
    id: `solution-1`,
    url: "/home2.svg",
    solutionTitle: "Full Account Management",
    solutionContent:
      "We will provide a comprehensive solution to protecting your Amazon seller account health.",
  },
  {
    id: `solution-2`,
    url: "/home3.svg",
    solutionTitle: "Search Engine Optimization (SEO)",
    solutionContent:
      "We will find the most profitable keywords that will get more search traffic to your products.",
  },
  {
    id: `solution-3`,
    url: "/home4.svg",
    solutionTitle: "Sponsored Ads Management (PPC)",
    solutionContent:
      "We will give you the edge against your competitors in a competitive online marketplace.",
  },
  {
    id: `solution-4`,
    url: "/home5.svg",
    solutionTitle: "Product Launch",
    solutionContent:
      "We will relieve you from the pitfalls and the struggles of having a failed product launch.",
  },
  {
    id: `solution-5`,
    url: "/home6.svg",
    solutionTitle: "Listing Optimization",
    solutionContent:
      "We will monitor, tweak and improve your listings, so you can just focus on creating quality products and scaling your business.",
  },
  {
    id: `solution-6`,
    url: "/home7.svg",
    solutionTitle: "Brand Protection & Assistance",
    solutionContent:
      "We will keep your minds at ease, by providing the information and assistance you need to protect your brand.",
  },
  {
    id: `solution-7`,
    url: "/home8.svg",
    solutionTitle: "Account Suspension Appeal & Reinstatement",
    solutionContent:
      "We will resolve your suspension quickly and effectively using the best solution.",
  },
  {
    id: `solution-8`,
    url: "/home9.svg",
    solutionTitle: "Reimbursement & Refund",
    solutionContent:
      "We will help you reconcile your inventory and make reimbursement easy for you.",
  },
  {
    id: `solution-9`,
    url: "/home10.svg",
    solutionTitle: "FBA Wholesale Partnership",
    solutionContent:
      "We will work with you to provide you with an all-in-one solution for growing your brand on Amazon.",
  },
];
const postData = [
  {
    id: `blog-post-3`,
    url: "/productlaunch8.jpg",
    postdate: "OCTOBER 21, 2021",
    posttitle: "Understanding The Amazon Pricing Strategy",
    postcontent:
      "When people need to buy things, they don't immediately dart off to the store to shop anymore. Instead, what often happens these days is browsing online, researching brands, and conducting price comparisons. If you take some time to look around first, you're more likely to find a better deal. For years now, offline competitors like […]",
  },
  {
    id: `blog-post-2`,
    url: "/productlaunch9.jpg",
    postdate: "OCTOBER 20, 2021",
    posttitle:
      "How Working With Amazon Sales Consultants Can Significantly Boost Your Sales",
    postcontent:
      "If you've only recently started selling on Amazon, you might be feeling overwhelmed with all the things you need to learn. Don't worry; you wouldn't be the first. Like you, millions of Amazon sellers are out there also figuring out how to navigate this platform. Fortunately, Amazon sales consultants exist to help alleviate some of […]",
  },
  {
    id: `blog-post-3`,
    url: "/productlaunch10.jpg",
    postdate: "OCTOBER 19, 2021",
    posttitle: "A Beginner’s Guide on How to Delete Amazon Account",
    postcontent:
      "There might come the point where you want to learn how to delete Amazon accounts. Of course, there are different reasons to do it, but whatever it may be, know that your reasons for doing so are all valid. In this article, you'll learn more about the common reasons why people deactivate their accounts and […]",
  },
];

const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Fragment>
      <Container>
        <Hero />
        <WorldBrands />
        <OurPartners />
        <Grid container spacing={2} sx={{ marginTop: 5 }}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <img
              style={{ borderRadius: "2%" }}
              src={"/sellerinteractive9.svg"}
              width={"13%"}
              alt={"Addian Management"}
            />
            <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
              Amazon selling the right way.
            </Typography>
            <Typography sx={{ marginTop: 3 }}>
              We help brands build loyalty and trust in an industry that’s
              extremely cluttered and competitive. Our thought-provoking and
              customized strategies have allowed us to grow our brands to over
              $10 million in annual revenue in under 5 years!
            </Typography>
            <Typography sx={{ marginTop: 3 }}>
            We’ve taken all the things we learned, mistakes we’ve made, and trimmed the fat to create this effective marketing and brand building platform to clients of all sizes: solo-preneurs, partnerships, startups, local businesses and enterprises. We focus on straightforward true and tried methods to minimize costs and to ensure results.
            </Typography>

            <Button
              variant="outlined"
              endIcon={<KeyboardArrowRightIcon />}
              sx={{
                marginTop: 4,
                border: "none",
              }}
            >
              Account Suspended? Call Us Now!
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <img
              style={{ borderRadius: "2%" }}
              src={"/home1.jpg"}
              width={"100%"}
              alt={"Addian Management"}
            />
          </Grid>
        </Grid>
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{
            marginTop: 10,
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          Solutions for every Amazon seller.
        </Typography>{" "}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Typography sx={{ textAlign: "center" }}>
              We can help you cut through the noise, find your audience and
              deliver your brand story at its best. We are dedicated to
              authentic brand stories and use journalistic methods to create the
              largest possible value for both your budget and your audience.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
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
              key={`${index}-solution-${sucess?.id}`}
            >
              <Box sx={{ border: 1, padding: 2, borderRadius: 3, height:220 }}>
                <img
                  style={{ borderRadius: "2%" }}
                  width={"13%"}
                  src={sucess?.url}
                  alt="solution Image"
                />
                <Typography sx={{ fontWeight: 600, paddingTop: 2 }}>
                  {sucess?.solutionTitle}
                </Typography>
                <Typography sx={{ paddingTop: 2 }}>
                  {sucess?.solutionContent}
                </Typography>
                <Button
                  variant="outlined"
                  endIcon={<KeyboardArrowRightIcon />}
                  sx={{
                    marginTop: 3,
                    border: "none",
                    marginLeft: -2,
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
            <Grid item xs={10} sm={10} md={6} lg={6}>
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{
                  marginTop: 6,
                  fontWeight: 800,
                }}
              >
                Latest posts
              </Typography>{" "}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div style={{ textAlign: "right", marginTop: 70 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={8} lg={8}></Grid>
                  <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Explore our blog
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={1} lg={1}>
                    <KeyboardArrowRightIcon style={{ marginTop: 2 }} />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        <Grid container spacing={2}>
            <Grid container spacing={3}>
              {postData.map((e, i) => {
                return (
                  <Grid spacing={1} item xs={12} sm={6} md={4} lg={4} xl={4}>
                    <LatestPosts data={e} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <ThrivingAmazon />

          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
      </Container>
    </Fragment>
  );
};

export default Home;
