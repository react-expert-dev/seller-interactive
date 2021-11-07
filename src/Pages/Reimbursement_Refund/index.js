import React, { Fragment } from "react";
import { Button, Grid, Typography, Box, CardMedia } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Root_Routes } from "../../Services/Routes/APP";
import { useHistory } from "react-router-dom";
import LatestPosts from "../../Components/LatestPosts";
import Container from "@mui/material/Container";
import OurPartners from "../../Components/OurPartners";
import ThrivingAmazon from "../../Components/ThrivingAmazon";

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
const ReimbursementRefund = () => {
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
                  marginTop: 10,
                  fontWeight: 800,
                }}
              >
                Amazon{" "}
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
                FBA Reimbursement{" "}
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
                Service.{" "}
              </Typography>{" "}
              <Typography variant="subtitle1" gutterBottom component="div">
                We know how stressful it is to reconcile your inventory. That's
                why we at Seller Interactive want to help make it easier for
                you! With thousands of transactions happening on Amazon every
                day, mistakes and errors can occur at your expense.
              </Typography>{" "}
              <Typography
                variant="subtitle1"
                sx={{
                  marginTop: 2,
                }}
                gutterBottom
                component="div"
              >
                Your FBA Seller account can get overwhelming when you need to
                keep track of all pending or lost items at the fulfillment
                center. It's likely that Amazon FBA indeed owes you, and even if
                you're unable to check your seller account frequently, it's
                essential to claim those pending reimbursements. Refunds and
                reimbursements can get a little complicated and time-consuming,
                but don't worry because Seller Interactive has that all covered.
              </Typography>{" "}
              <Button
                variant="contained"
                onClick={() => clickHandler(Root_Routes?.contact_us)}
                sx={{
                  marginTop: 5,
                  borderRadius: 2,
                }}
              >
                Claim Your Reimbursements. Call us Now!{" "}
              </Button>{" "}
            </Grid>{" "}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
            >
              <img
                src={"/refund1.jpg"}
                alt={"hero-image"}
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: 10 }}
              />
            </Grid>{" "}
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
            Focus on growing your business.
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
                What we do
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Did you know that Amazon won’t process a reimbursement unless
                claimed by the seller? Most automated refunds and reimbursements
                do not cover all damages to your inventory. There are many
                reasons you might not be getting what Amazon owes you. Our team
                of Amazon experts carefully inspects possible issues and cases
                where you might be eligible for reimbursements. Our team will
                contact Amazon and open a new case for you so you can sit back,
                relax, and focus on growing your business.
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
                Claim Your Reimbursements. Call us Now!
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/refund2.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 8 }}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/refund3.jpg"}
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
                How we do it
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                When you sign up with us, our refund experts scans your account
                and run manual checks. We evaluate your last 18 months’ data and
                raise FBA inventory reimbursement requests to Seller Central
                support. Not only that, but we also audit your entire Amazon
                seller account to see if you are overcharged with any Amazon
                fees (such as listing fees due to incorrect categorization or
                updates to your product weight and dimensions).
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
                Claim Your Reimbursements. Call us Now!
              </Button>
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
                We are here to help
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Seller Interactive understands the importance of time. That’s
                why we believe sellers shouldn’t spend valuable hours just
                reviewing their accounts. We are here to help you get your money
                back so you can focus on what matters. Reach out to us now to
                find out more.
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
                Claim Your Reimbursements. Call us Now!
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/refund4.jpg"}
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
            Our FBA Reimbursement Service
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
            covers:
          </Typography>{" "}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
                  <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Typography sx={{ textAlign: "center" }}>
                      Seller Interactive not only handles refunds, but our team
                      of Amazon experts can also help you with some of the most
                      critical aspects of your business. It's time to start
                      taking control of what happens in your business.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
                </Grid>

                <Grid item xs={2} sm={2} md={1} lg={1}>
                  <img
                    className="productLaunchCoverImages"
                    src={"/refund5.svg"}
                    width={"60%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={11} lg={11}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Overall Check
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    When we look into your account, we also identify missing and
                    damaged inventory, step by step, so that no units that go
                    through fulfillment by amazon are overlooked.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={1} lg={1}>
                  <img
                    className="productLaunchCoverImages"
                    src={"/refund6.svg"}
                    width={"60%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={11} lg={11}>
                  <Typography sx={{ fontWeight: 600 }}>Tracking</Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    We track Amazon warehouse lost or damaged items to ensure
                    that you are justly compensated.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={1} lg={1}>
                  <img
                    className="productLaunchCoverImages"
                    src={"/refund7.svg"}
                    width={"60%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={11} lg={11}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Return Handling
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    We also handle returns and ensure that both received orders
                    and reimbursements match up. Our team also ensures no
                    overages; each customer return will be refunded what they
                    were initially charged - we don't want you to be charged for
                    any dimensional, weight, or Amazon commission fees.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={1} lg={1}>
                  <img
                    className="productLaunchCoverImages"
                    src={"/refund8.svg"}
                    width={"60%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={11} lg={11}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Damaged Goods
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Not only that, but we also identify goods damaged by the
                    inbound shipper and ensure that shipped items that were
                    replaced are returned before the deadline. We're on top of
                    making sure that Amazon has refunded your 20% restocking fee
                    or the full amount.
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Our company knows the importance of keeping track of what
                    goes on in your business. That's why we're here to give you
                    a helping hand.
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={2} sm={2} md={1} lg={1}></Grid>
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
                  How long does it take to get reimbursed from Amazon?
                </Typography>
              </div>
              <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
                The amount of time it takes to get reimbursed by Amazon can vary
                by case.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ paddingLeft: 6, paddingTop: 2 }}
              >
                Generally, reimbursement is seen between 14-30 days once a case
                is resolved.
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
            Our Full Amazon Seller Account{" "}
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
            Management service covers:{" "}
          </Typography>{" "}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/amazon5.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Setting Up a Seller Central Account
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Get started on Amazon with valuable team members who will
                    help you get a head start. Our team will help build the
                    foundation for your business to thrive on Amazon right from
                    the very beginning.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/amazon6.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Search Engine Optimization (SEO)
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Boosting your organic rankings will never be a problem when
                    you count on our expertise. We know how important keywords
                    are to improving your brand's visibility on Amazon. That's
                    why we make it a point to use only the most profitable ones
                    for your product, including long-tail, high-volume keywords
                    unknown to your competitors.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/amazon7.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Product Listing Management
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    We handle all processes involving your product listings,
                    from placing them in their specific category down to adding
                    details like SKU, content, search terms, attributes, and
                    more. Additionally, we also take charge of doing bulk and
                    parent-child listings for your products on Amazon and other
                    details that contribute towards winning the buy box through
                    Seller Central.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/amazon8.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Product Launch
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Launch your private label the right way by taking advantage
                    of our product launch services. Seller Interactive develops
                    a customized, strategically planned, and executed launch
                    that elicits favorable customer feedback. We use effective
                    marketing techniques and combine these with adequate
                    brand-protective measures that keep your content safe from
                    hijackers and counterfeiters in the Amazon Marketplace.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/amazon9.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Listing Optimization
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    In optimizing your product pages, we maximize keyword
                    rankings. Our SEO proficiency allows us to efficiently
                    utilize them for increasing and maintaining your pages'
                    conversion rates so that you can grow your business on
                    Amazon.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/amazon10.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Enhanced Brand Content
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Enhanced Brand Content is key to highlighting your product's
                    benefits and features that will convert a potential
                    customer. With EBC, you can effectively and creatively
                    showcase your brand while optimizing your listing even
                    further. We'll provide keyword-indexed compelling copies
                    that elaborate further on the advantages your product
                    offers. These will be presented in a strategic layout with
                    captivating images that perfectly complement the targeted
                    descriptions.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/amazon11.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Brand Registry & Protection
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Registering your brand on Amazon is an extensive procedure
                    requiring concentrated effort and ample time. In partnering
                    with our account management team, expect to manage each
                    process diligently and take cake charge of submitting your
                    documents. We'll safeguard your brand from malicious
                    entities such as counterfeiters and unauthorized sellers.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/amazon12.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Prep & Logistics
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    As your reliable third-party prep service provider, we take
                    charge of handling all your shipment-related necessities,
                    and that includes monitoring inventory levels, claiming
                    reimbursements, managing FBA related cases, and more. Our
                    unquestionable experience has made us fully knowledgeable of
                    all the rules and guidelines involving shipments and how to
                    manage Amazon accounts.
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

export default ReimbursementRefund;
