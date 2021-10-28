import React, { Fragment } from "react";
import { Button, Grid, Typography, Box, CardMedia } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LatestPosts from "../../Components/LatestPosts";
import Container from "@mui/material/Container";
import OurPartners from "../../Components/OurPartners";
import ThrivingAmazon from "../../Components/ThrivingAmazon";
import "./style.css";

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
const PlatformAdvertising = () => {
  return (
    <Fragment>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{
              xs: 1,
              sm: 2,
              md: 3,
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
            >
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{
                  fontWeight: 800,
                }}
              >
                Amazon Demand-Side
              </Typography>{" "}
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{
                  marginTop: -1,
                  fontWeight: 800,
                }}
              >
                Platform Advertising.
              </Typography>{" "}
              <Typography variant="subtitle1" gutterBottom component="div">
                If you're ready to scale and take your brand to the next level,
                Amazon DSP could be the solution for you.
              </Typography>{" "}
              <Typography
                variant="subtitle1"
                sx={{ marginTop: 2 }}
                gutterBottom
                component="div"
              >
                Seller Interactive provides Amazon DSP help to provide sellers
                with the tools needed to reach audiences both on and off Amazon
                with a campaign strategy specific to your brand. Our highly
                trained advertisers use DSP features to run various ads based on
                your brand goals to reach a wider audience, generate awareness,
                increase your conversion, and out-perform your competitors with
                a holistic marketing approach.
              </Typography>{" "}
              <div style={{ display: "flex", paddingTop: 10 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">
                  Reach an exclusive and highly targeted audience for your brand
                  with Amazon DSP insights
                </Typography>
              </div>
              <div style={{ display: "flex", paddingTop: 5 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">
                  Access a wide variety of reporting metrics only available to
                  Amazon approved agencies so you can monitor KPI and success
                  drivers
                </Typography>
              </div>
              <div style={{ display: "flex", paddingTop: 5 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">
                  Build and programmatically buy display, video, and audio ads
                  to extend your brand's visibility.
                </Typography>
              </div>
              <div style={{ display: "flex", paddingTop: 5 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">
                  Engage with potential customers both on and off Amazon
                  throughout the customer journey
                </Typography>
              </div>
              <div style={{ display: "flex", paddingTop: 5 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">
                  Out-perform your competitors by building campaigns with
                  definitive goals and objective
                </Typography>
              </div>
              <Typography variant="subtitle1" gutterBottom component="div">
                The Seller Interactive’s Wholesale business model oversees the
                entire process of selling wholesale on Amazon by working with
                you, the brand owner, and your team to meet brand standards and
                optimize your potential for seller success.
              </Typography>{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={12} md={6}>
              <img
                className="platformAdvertisingImage"
                src={"/dsp1.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>{" "}
          <Grid container spacing={2} sx={{ marginTop: 5 }}>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/sellerinteractive9.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />
              <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
                Develops a comprehensive advertising plan with unique insights
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                With valuable customer insight and extensive reporting tools,
                Seller Interactive uses the Amazon DSP program to build highly
                targeted campaigns aligned with your brand's goals and
                objectives, reaching potential shoppers throughout every stage
                of the customer journey on and off Amazon.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/dsp2.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 8 }}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/dsp3.jpeg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/sellerinteractive9.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />
              <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
                Access to Exclusive Audiences
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Through Amazon DSP, Seller Interactive utilizes assets within
                the Amazon ecosystem giving your brand visibility and access to
                exclusive audiences. Amazon DSP resources include IMDB, leading
                publishers' sites, and third-party exchange.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 5 }}>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/sellerinteractive9.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />
              <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
                First-Rate Reporting System
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                The DSP Amazon program is only accessible to approved
                advertisers and agencies. Seller Interactive uses performance
                reporting to analyze before and after campaigns so that brands
                and marketers can analyze which strategies drive success
                throughout the campaign.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/dsp4.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, textAlign: "center", marginTop: 10 }}
          >
            Frequently Asked Questions.
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: 5 }}>
            <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <div style={{ display: "flex" }}>
                <KeyboardArrowRightIcon
                  style={{ paddingLeft: 20, paddingRight: 10 }}
                />

                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Who is Amazon DSP For?
                </Typography>
              </div>
              <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
                Amazon DSP is best suited for brands earning at least 7 figures
                on Amazon annually, on high ticket ASINs ($50+) with a strong
                brand presence.
              </Typography>

              <div style={{ display: "flex", marginTop: 20 }}>
                <KeyboardArrowRightIcon
                  style={{ paddingLeft: 20, paddingRight: 10 }}
                />

                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  How does Amazon DSP influence RoAS?
                </Typography>
              </div>
              <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
                Seller Interactive’s extensive knowledge of audience building
                and targeting makes Amazon DSP a perfect tool for brands who
                want to scale and earn extra traffic.
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ paddingLeft: 6, paddingTop: 2 }}
              >
                Currently, due to Amazon’s limited targeting capabilities, RoAS
                may not always show results as expected unless your products
                have great branding. Well branded products allow the opportunity
                to use exclusive DSP to retarget people who view or interact
                with the brand.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ paddingLeft: 6, marginTop: 2 }}
              >
                Talk to a Seller Interactive campaign manager to see if DSP is
                the right next step for your brand.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
          </Grid>
          <OurPartners />
          <ThrivingAmazon />
        </Box>
      </Container>
    </Fragment>
  );
};

export default PlatformAdvertising;
