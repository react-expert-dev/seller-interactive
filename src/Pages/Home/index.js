import React, { Fragment } from "react";
import Link from "@mui/material/Link";
import {
  Container,
  MobileStepper,
  Paper,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Root_Routes } from "../../Services/Routes/APP";
import { useHistory } from "react-router-dom";

import {
  KeyboardArrowLeft,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

//user import

import { Hero, OurPartners, WorldBrands } from "./components";
import LatestPosts from "../../Components/LatestPosts";
import ThrivingAmazon from "../../Components/ThrivingAmazon";
import "./style.css";

//component

const images = [
  {
    reviewTitle: '"An all-star solution!"',
    reviewContent:
      '"From the moment we started together, I was assigned very skilled project manager who took the time to understand the status of my business, and my goals going forward. Several calls and e-mails later we had an agreeable strategy… and budget. In very short order, my Amazon presence was refreshed and testing of our strategy had commenced... I am 100% delighted."',
    imgPath: "./reviewer1.png",
    reviewerName: "Skip Lei",
    designation: "Owner, TriBella LLC",
  },
  {
    reviewTitle: '""I love that they do the write-ups""',
    reviewContent:
      '"Our account team at Seller Interactive has been really great: they’re so quick to respond when we need new images or help to troubleshoot our Amazon listings. I love that they do the write-ups and A+ content focused on a few keywords that we can then bid aggressively on with Sponsored Products. I love the look of the images - they’re so much more professional and creative than what we could come up with ourselves. I think it’s really helped with conversions and gives customers confidence in our brand."',
    imgPath: "./reviewer2.png",
    reviewerName: "Joanna Shu",
    designation: "COO, Refresh Skin Therapy",
  },
  {
    reviewTitle: '"The team at Seller Interactive know their stuff!"',
    reviewContent:
      '"The team at Seller Interactive know their stuff! They took over all the Amazon work for my 65 SKUs, so I can focus on my core business. The SI team has not only been honest, but super diligent about improving my sales performance in a hyper-competitive product category! I am sticking with them for the long haul."',
    imgPath: "./reviewer3.png",
    reviewerName: "Caeser Wong",
    designation: "Owner, Gator Cable",
  },

  {
    reviewTitle:
      '"Working with Seller Interactive has been a refreshing experience"',
    reviewContent:
      '"Working with Seller Interactive has been a refreshing experience. Mohamed, has taken the project and owned it from start to finish. He has communicated clearly, always been on time and delivered to our expectations. Most importantly, they have delivered on month over month sales growth in a short time frame through Amazon. We will continue to work with SI and their talented team for the future."',
    imgPath: "./review4.png",
    reviewerName: "Ioanna Wilde",
    designation: "Director of Marketing, SoLo Nutrition",
  },
  {
    reviewTitle:
      '"Mohamed Aden at Seller Interactive has been extremely helpful"',
    reviewContent:
      '"Mohamed Aden at Seller Interactive has been extremely helpful getting seven of my client’s products listed on Amazon. I look forward to working with Mohamed on three more new products that are now being considered."',
    imgPath: "./reviewer5.png",
    reviewerName: "Donald Flynn",
    designation: "Owner, Lanlay Cosmetics",
  },
];

const successStories = [
  {
    id: `solution-1`,
    url: "/home2.svg",
    solutionTitle: "Full Account Management",
    solutionContent:
      "We will provide a comprehensive solution to protecting your Amazon seller account health.",
    redirectLink: "/account_management",
  },
  {
    id: `solution-2`,
    url: "/home3.svg",
    solutionTitle: "Search Engine Optimization (SEO)",
    solutionContent:
      "We will find the most profitable keywords that will get more search traffic to your products.",
    redirectLink: "/seo",
  },
  {
    id: `solution-3`,
    url: "/home4.svg",
    solutionTitle: "Sponsored Ads Management (PPC)",
    solutionContent:
      "We will give you the edge against your competitors in a competitive online marketplace.",
    redirectLink: "/ppc",
  },
  {
    id: `solution-4`,
    url: "/home5.svg",
    solutionTitle: "Product Launch",
    solutionContent:
      "We will relieve you from the pitfalls and the struggles of having a failed product launch.",
    redirectLink: "/product_launch",
  },
  {
    id: `solution-5`,
    url: "/home6.svg",
    solutionTitle: "Listing Optimization",
    solutionContent:
      "We will monitor, tweak and improve your listings, so you can just focus on creating quality products and scaling your business.",
    redirectLink: "/listing_optimization",
  },
  {
    id: `solution-6`,
    url: "/home7.svg",
    solutionTitle: "Brand Protection & Assistance",
    solutionContent:
      "We will keep your minds at ease, by providing the information and assistance you need to protect your brand.",
    redirectLink: "/protection_asistance",
  },
  {
    id: `solution-7`,
    url: "/home8.svg",
    solutionTitle: "Account Suspension Appeal & Reinstatement",
    solutionContent:
      "We will resolve your suspension quickly and effectively using the best solution.",
    redirectLink: "/appeal_reinstatement",
  },
  {
    id: `solution-8`,
    url: "/home9.svg",
    solutionTitle: "Reimbursement & Refund",
    solutionContent:
      "We will help you reconcile your inventory and make reimbursement easy for you.",
    redirectLink: "/reimbursement_refund ",
  },
  {
    id: `solution-9`,
    url: "/home10.svg",
    solutionTitle: "FBA Wholesale Partnership",
    solutionContent:
      "We will work with you to provide you with an all-in-one solution for growing your brand on Amazon.",
    redirectLink: "/wholesale_partnership_program",
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
  const history = useHistory();
  const clickHandler = (href) => {
    history.push(href);
    
  };
  const theme = useTheme();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
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
              We’ve taken all the things we learned, mistakes we’ve made, and
              trimmed the fat to create this effective marketing and brand
              building platform to clients of all sizes: solo-preneurs,
              partnerships, startups, local businesses and enterprises. We focus
              on straightforward true and tried methods to minimize costs and to
              ensure results.
            </Typography>

          
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
              <Box sx={{ border: 1, padding: 2, borderRadius: 3, height: 220 }}>
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
                  variant="text"
                  endIcon={<KeyboardArrowRightIcon />}
                  href={sucess?.redirectLink}
                  sx={{
                    marginTop: 3,
                    border: "none",
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          ))}
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
          The good feelings are mutual.
        </Typography>{" "}
        <Box
          sx={{ maxWidth: "100%", height: 450, marginBottom: 3, flexGrow: 1 }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div style={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ marginBottom: 3 }}>
                  {step.reviewTitle}
                </Typography>
                <Typography variant="h5">{step.reviewContent}</Typography>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      marginTop: 5,
                      maxWidth: "10%",
                      overflow: "hidden",
                      width: "20%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
                <Typography variant="subtitle1">{step.reviewerName}</Typography>
                <Typography variant="h6">{step.designation}</Typography>
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
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRightIcon />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRightIcon />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div  className="latestPostsHeading">
            <Typography
              variant="h3"
              gutterBottom
              component="div"
             
              sx={{
                marginTop: 6,
                marginBottom: 6,
                fontWeight: 800,
              }}
            >
              Latest posts
            </Typography>{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} sx={{ textAlign: "right" }}>
          <div  className="exploreBlogBtn">
            <Button
              variant="text"
              endIcon={<KeyboardArrowRightIcon />}
              onClick={() => clickHandler(Root_Routes?.blog)}
             
              sx={{
                marginTop: 8,
                border: "none",
                fontWeight: 600,
              }}
            >
              Explore our blog
            </Button>
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
      </Container>
    </Fragment>
  );
};

export default Home;
