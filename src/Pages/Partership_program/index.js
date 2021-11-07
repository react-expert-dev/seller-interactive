import React, { Fragment } from "react";
import { Button, Grid, Typography, Box, CardMedia } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LatestPosts from "../../Components/LatestPosts";
import { Root_Routes } from "../../Services/Routes/APP";
import { useHistory } from "react-router-dom";
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
const PartnerShipProgram = () => {
  const history = useHistory();
  const clickHandler = (href) => {
    history.push(href);   
  };
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
                Amazon FBA
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
                Wholesale.
              </Typography>{" "}
              <Typography variant="subtitle1" gutterBottom component="div">
                Selling on Amazon can be tricky and time-consuming if you aren’t
                familiar with the marketplace. Even if you are, the strains of
                maintaining, troubleshooting, and competing can become all too
                overwhelming. Managing an Amazon business requires time and
                money with constant efforts and unexpected expenses. Still,
                given how e-commerce is evolving and Amazon’s increasingly
                growing prominence in its role as part of the consumer’s
                purchase journey, it’s more critical than ever.
              </Typography>{" "}
              <Typography
                variant="subtitle1"
                sx={{ marginTop: 2 }}
                gutterBottom
                component="div"
              >
                Seller Interactive’s wholesale service alleviates the challenges
                of selling on Amazon by becoming your brand’s third-party
                re-seller on the largest e-commerce platform in the world. SI
                knows how to sell wholesale on Amazon and has a proven track
                record with leading products in multiple categories that make it
                a reliable and rewarding partnership for your brand. We buy the
                wholesale product directly from you and with our end-to-end
                logistics capabilities, in-house team, and third-party
                partnerships, we streamline the entire process handling the ins
                and outs of selling on Amazon FBA.
              </Typography>{" "}
              <Typography sx={{ fontWeight: 600, paddingTop: 3 }}>
                Some of our services include:
              </Typography>
              <div style={{ display: "flex", paddingTop: 10 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">
                  Listing Creation & Optimization
                </Typography>
              </div>
              <div style={{ display: "flex", paddingTop: 5 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">Product Images</Typography>
              </div>
              <div style={{ display: "flex", paddingTop: 5 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">PPC Ad Management</Typography>
              </div>
              <div style={{ display: "flex", paddingTop: 5 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">
                  Enhanced Brand Content
                </Typography>
              </div>
              <div style={{ display: "flex", paddingTop: 5 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">
                  Exceptional Customer Service
                </Typography>
              </div>
              <div style={{ display: "flex", paddingTop: 5 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">MAP enforcement</Typography>
              </div>
              <div style={{ display: "flex", paddingTop: 5 }}>
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">
                  Unauthorized Seller Removal
                </Typography>
              </div>
              <div
                style={{ display: "flex", paddingTop: 5, paddingBottom: 10 }}
              >
                <KeyboardArrowRightIcon style={{ paddingLeft: 20 }} />

                <Typography variant="subtitle1">
                  In-house/3P Inventory and Logistics Management
                </Typography>
              </div>
              <Typography variant="subtitle1" gutterBottom component="div">
                The Seller Interactive’s Wholesale business model oversees the
                entire process of selling wholesale on Amazon by working with
                you, the brand owner, and your team to meet brand standards and
                optimize your potential for seller success.
              </Typography>{" "}
              <Button
                variant="contained"
                onClick={() => clickHandler(Root_Routes?.contact_us)}
                sx={{
                  borderRadius: 2,
                }}
              >
                Thinking Wholesale?. Call us Now!{" "}
              </Button>{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={12} md={6}>
              <CardMedia
                className="partnershipProgramVideo"
                component="iframe"
                image="https://www.youtube.com/embed/2mFyOfsXt6k"
              />
            </Grid>
          </Grid>{" "}
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
            The all-in-one solution for growing
          </Typography>{" "}
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{
              marginTop: -3,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            your brand on Amazon.
          </Typography>{" "}
          <Grid container spacing={2} sx={{ marginTop: 5 }}>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/sellerinteractive9.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />
              <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
                Build your business with us
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Streamline and diversify. Leave the entire task of managing a
                wholesale account in the hands of a dedicated team of Amazon
                specialists, Seller Interactive. You can look forward to
                building your business without the hassles with us in charge.
              </Typography>

              <Button
                variant="outlined"
                endIcon={<KeyboardArrowRightIcon />}
                onClick={() => clickHandler(Root_Routes?.contact_us)}
                sx={{
                  marginTop: 4,
                  border: "none",
                }}
              >
                Thinking Wholesale? Call Us Now!
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/partnership1.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 8 }}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/partnership2.jpg"}
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
                All-in-one partnership
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Our team will handle everything from warehousing, fulfillment,
                and logistics for you. We will work with your team to manage
                your Amazon account or act as a wholesale partner. We will have
                your wholesale products to sell on Amazon on our store while
                planning and executing the brand's best marketing strategies.
              </Typography>
              <Button
                variant="outlined"
                endIcon={<KeyboardArrowRightIcon />}
                onClick={() => clickHandler(Root_Routes?.contact_us)}
                sx={{
                  marginTop: 4,
                  border: "none",
                }}
              >
                Thinking Wholesale? Call Us Now!
              </Button>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, textAlign: "center", marginTop: 10 }}
          >
            We get everything done via a systematic two-step process:
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: 5 }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/partnership3.svg"}
                width={"9%"}
                alt={"Addian Management"}
              />
              <Typography sx={{ fontWeight: 600, paddingTop: 2 }}>
                1. Receive the inventory you ship to our warehouse
              </Typography>
              <Typography>
                We have several accessible warehouses. All you have to do is
                arrange the shipment of your products to any of our warehouses.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/partnership4.svg"}
                width={"9%"}
                alt={"Addian Management"}
              />
              <Typography sx={{ fontWeight: 600, paddingTop: 2 }}>
                2. Take charge of logistics and account management
              </Typography>
              <Typography>
                After shipping your inventory to us, we will do the rest -
                prepping, fulfillment, shipping, account management, and
                marketing. We work accurately and efficiently. We make sure that
                the job gets done quickly. Hence, we help grow your Amazon sales
                while protecting your brand in the process.
              </Typography>
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
                  How to sell wholesale on Amazon?
                </Typography>
              </div>
              <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
                Selling wholesale on Amazon consists of several primary tasks.
                People who are selling their products on Amazon successfully
                first find a product that is in high demand. Then they will buy
                wholesale from a reputable supplier. Once inventory is secured,
                they list their products on Amazon themselves with a partner
                with a wholesale account manager like Seller Interactive.
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ paddingLeft: 6, paddingTop: 2 }}
              >
                Seller Interactive alleviates the pain points in selling on
                Amazon. We provide services that will guide and support your
                team through the ins and out of selling wholesale products on
                Amazon.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
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
            Our FBA Wholesale Partnership
          </Typography>{" "}
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{
              marginTop: -3,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            Program covers:
          </Typography>{" "}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/partnership5.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Prep, Pack, Fulfillment to Amazon
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    When we receive your products, we will inspect, wrap,
                    bundle, package, and label them based on your requirements
                    to prepare the products for shipment to Amazon. A systematic
                    process carried out by our highly skilled team ensures that
                    all tasks will be completed accurately and promptly.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/partnership6.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Shipping to Amazon USA and Canada
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    To market your offerings, we take advantage of
                    state-of-the-art tools. These allow us to better reach a
                    wider audience and market your products on popular online
                    platforms like social media channels.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/partnership7.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Account Management
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    You will have an experienced account manager who will manage
                    your entire Amazon operations. We take charge of demand
                    forecasting, customer service, and Amazon support ticket
                    handling. All measures will be taken to protect your seller
                    account health while growing your brand on Amazon.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/partnership8.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>Marketing</Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Rely on our expertise to research the most profitable
                    keywords for your product and run ad campaigns that will get
                    your products in front of the right customers. To keep you
                    ahead of the competition, our team constantly tweaks and
                    improves all aspects of your listings including copy and
                    images.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/partnership9.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Brand Registry
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    If you have a registered trademark or are eligible to have
                    one, we will help you register with Amazon Brand Registry.
                    This program gives you access to advanced features, not
                    available to regular sellers, for your product listings, ad
                    campaigns, branding, and more. Most importantly, brand
                    registry allows you to combat unauthorized sellers and
                    product infringement cases swiftly. It is a vital tool for
                    brand and intellectual property protection.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/partnership10.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    System Reimbursement
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    One of the challenges of being an Amazon Seller is
                    experiencing inventory damages, and dealing with Amazon on
                    reimbursements can take away valuable time and effort. With
                    a systematic approach, we at Seller Interactive will help
                    you maximize the reimbursements that you will be getting,
                    without you dropping a single sweat.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
          <OurPartners />
          <ThrivingAmazon />
        </Box>
      </Container>
    </Fragment>
  );
};

export default PartnerShipProgram;
