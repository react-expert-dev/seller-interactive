import React, { Fragment } from "react";
import { Button, Grid, Typography, Box, CardMedia } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Container from "@mui/material/Container";
import LatestPosts from "../../Components/LatestPosts";
import OurPartners from "../../Components/OurPartners";
import ThrivingAmazon from "../../Components/ThrivingAmazon";
import "./style.css"

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

const AppealReinstatement = () => {
  return (
    <Fragment>
      <Container>
        <Box
          sx={{
            width: "100%",
          }}
        >
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
                marginTop:5,
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
                  marginTop: -3,
                  fontWeight: 800,
                }}
              >
                Suspension Appeal Service.{" "}
              </Typography>{" "}
              <Typography variant="subtitle1" gutterBottom component="div">
                If you're selling on Amazon, Account Suspension is your biggest
                obstacle. Once you receive that dreaded notification that your
                account has been suspended, you need to act on this, and you
                need to do it fast. However, given how tricky suspensions are,
                you can't afford to make mistakes. You need to reinstate your
                account quickly and resolve the issue using the best solution -
                this is where we come in. Seller Interactive provides services
                that help Amazon Accounts prepare for the unexpected or resolve
                Amazon account suspension and avoid losses in time, money, and
                effort.
              </Typography>{" "}
              <Button
                variant="contained"
                sx={{
                  marginTop: 5,
                  borderRadius: 2,
                }}
              >
                Account Suspended? Call Us Now!{" "}
              </Button>{" "}
            </Grid>{" "}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
             
            >
              <CardMedia
                className="appealReinstatementVideo"
                component="iframe"
                image="https://www.youtube.com/embed/Vz_AG8xy81M"
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
            Peace of mind for your Amazon sales
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
            channel.
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
                Suspension Protection Program
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Seller Interactive’s Suspension Protection Program is like
                buying insurance for your Amazon seller account. We actively
                monitor your account performance for items that may trigger the
                suspension system and act immediately to help you reinstate your
                listing or account when it’s unpreventable. Our Amazon Experts
                team will draft your Appeal Letter and Plan of Action to give
                you the best chance and fastest resolution. We know exactly what
                the Amazon Performance Team is looking for and have a high
                success rate with our existing clients.
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
                style={{ borderRadius: "2%", marginTop: 40 }}
                src={"/appeal1.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 8 }}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/appeal2.jpg"}
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
                Expect the unexpected
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                We understand how catastrophic unexpected Amazon issues can be
                to your business, especially suspensions. For most e-commerce
                sellers, Amazon is the largest and highest revenue sales
                channel, and it’s detrimental to the company if it’s gone. It’s
                not a matter of will my Seller Account get suspended but when
                the account will get suspended. There are numerous reasons why
                Amazon suspends your account or product listings.
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
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 5 }}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/sellerinteractive9.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />
              <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
                Most common suspension reasons:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ul style={{ lineHeight: 2.5 }}>
                    <li>Multiple Amazon accounts</li>
                    <li>Listed against Amazon condition guidelines</li>
                    <li>Listing reported as inauthentic item</li>
                    <li>Listing reported as counterfeit item</li>
                    <li>
                      Neglected negative performance notifications/performance
                      metrics
                    </li>
                    <li>
                      Product safety complaints from customers (or competitors)
                    </li>
                    <li>Restricted images or copy on detail page (listing)</li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ul style={{ lineHeight: 2.5 }}>
                    <li>Used item sold as new</li>
                    <li>Not as advertised refund reasons from customers</li>
                    <li>Expired items</li>
                    <li>Restricted product</li>
                    <li>Order defect rate too high</li>
                    <li>
                      High negative customer experience rating (NCX)/Negative
                      feedback
                    </li>
                  </ul>
                </Grid>
              </Grid>

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
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img
                style={{ borderRadius: "2%", marginTop: 40 }}
                src={"/appeal3.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 8 }}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/appeal4.jpg"}
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
                Spare yourself the stress
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Most of the triggers for a listing suppression or suspension are
                out of your control and are generally triggered by external
                factors. When this inevitable situation arises during your
                Amazon selling journey, individual and very specific actions
                need to be taken to resolve this issue to avoid substantial
                financial losses and negative brand reputation. For those lucky
                enough to have avoided this, it becomes a frantic stressful
                struggle to put all the pieces together when it does happen. We
                can help you at Seller Interactive.
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
            Our Suspension Protection Program
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
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/appeal5.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Account Creation Failure
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Seller accounts can get suspended right at the very first
                    step - during account creation. Even before you completely
                    begin, allow our team to assist you from getting verified to
                    setting up your account and listing so you can start selling
                    in no time.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/appeal6.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Poor Seller Performance
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Amazon puts a great deal of focus on customer service, so
                    having a poor seller performance can get your account
                    suspended.
                  </Typography>
                  <Typography sx={{ paddingTop: 3, fontWeight: 600 }}>
                    You may be suspended for the following:
                  </Typography>
                  <ul style={{ lineHeight: 1.5 }}>
                    <li>Order Defect Rate Above 1%</li>
                    <li>Late Shipment Rate Above 4%</li>
                    <li>Pre-Fulfillment Cancel Rate Above 2.5%</li>
                  </ul>
                  <Typography sx={{ paddingTop: 1 }}>
                    Get your account reinstated. Our team of experts will help
                    you create an effective appeal with a plan of action
                    ensuring Amazon that your rates will stay within acceptable
                    limits.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/appeal7.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Violation of Amazon Policies
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Suspension due to violation of Amazon policies is often
                    vague, so sellers are usually clueless about how to fix the
                    problem.
                  </Typography>
                  <Typography sx={{ paddingTop: 3, fontWeight: 600 }}>
                    One of the following may be the reason for your suspension:
                  </Typography>
                  <ul style={{ lineHeight: 1.5 }}>
                    <li>Order Defect Rate Above 1%</li>
                    <li>Late Shipment Rate Above 4%</li>
                    <li>Pre-Fulfillment Cancel Rate Above 2.5%</li>
                  </ul>
                  <Typography sx={{ paddingTop: 1 }}>
                    Get your account reinstated. Our team of experts will help
                    you create an effective appeal with a plan of action
                    ensuring Amazon that your rates will stay within acceptable
                    limits.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/appeal8.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                  IP Complaints Resolution
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Copyright, trademark, and patent violations not only take
                    away your Amazon selling privileges; they also have law
                    implications.
                  </Typography>
                  <Typography sx={{ paddingTop: 2 }}>
                    If you have received a notice of IP rights infringement from
                    Amazon, we have a team of skilled IP lawyers who can get the
                    complaint withdrawn and appeal to Amazon legal, so you can
                    get your account reinstated.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/appeal9.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Brand Protection
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    With the rise of counterfeiters and hijackers, it’s
                    necessary to set up all measures to protect your brand. Let
                    our team do the work for you. We’ll help you file for
                    copyrights, trademarks, and patents for your brand.
                  </Typography>
                  <Typography sx={{ paddingTop: 2 }}>
                    If you’ve spotted unauthorized sellers in your brand
                    listing, we’ll closely work with you to get rid of hijackers
                    and regain control of your listing. From evaluation,
                    drafting cease and desist letters, filing for reports of
                    infringement, and setting up preventive measures, we’ll be
                    with you all throughout the process.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                  <img
                    style={{ borderRadius: "2%" }}
                    src={"/appeal10.svg"}
                    width={"80%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Typography sx={{ fontWeight: 600 }}>
                    Recovery of Damages
                  </Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    If you’re accused of selling counterfeit products, Amazon
                    can immediately suspend your listing or your seller account
                    entirely. Falsely accused of selling counterfeit products?
                    Let us help. Our legal experts will help you file legal
                    claims and recover damages from brands that filed false
                    complaints.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginBottom: 3 }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
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
          <OurPartners />
          <ThrivingAmazon />
        </Box>
      </Container>
    </Fragment>
  );
};

export default AppealReinstatement;
