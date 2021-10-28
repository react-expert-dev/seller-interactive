import React, { Fragment } from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
    posttitle:
      "A Beginner’s Guide on How to Delete Amazon Account",
    postcontent:
      "There might come the point where you want to learn how to delete Amazon accounts. Of course, there are different reasons to do it, but whatever it may be, know that your reasons for doing so are all valid. In this article, you'll learn more about the common reasons why people deactivate their accounts and […]",
  },
];
const ProductLanch = () => {
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
                FBA Launch Service.{" "}
              </Typography>{" "}
              <Typography variant="subtitle1" gutterBottom component="div">
                For first-time and experienced Amazon sellers, launching a new
                product can still be challenging and can definitely make or
                break your sales results online. Launching on Amazon
                marketplaces requires more than keyword research, positive
                reviews, and product photography. Increasing sales velocity is
                crucial for a viral launch. With our Seller Interactive
                professionals' experience, we can relieve you from the pitfalls
                and struggles of having a failed product launch and set you up
                for success.
              </Typography>{" "}
              <Button
                variant="contained"
                sx={{
                  marginTop: 5,
                  borderRadius: 2,
                }}
              >
                Work with an Amazon PPC Expert. Call us Now!{" "}
              </Button>{" "}
            </Grid>{" "}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
            >
              <img
                src={"/productlaunch1.jpg"}
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
            Boost business advantages with
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
            successful Amazon FBA Launch
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
            Service.
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
                Let us do the work for you.
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Launching a new product on Amazon can often be challenging -
                especially if you’re a first-time seller. It could feel like you
                have everything in place for a product launch strategy, from
                Amazon PPC campaigns to meticulously researched search terms on
                your Amazon listings, only to realize that this task requires
                more time and effort than you thought.
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                In reality, this task comes as a process regardless of your
                experience selling on Amazon FBA, which is why many who launch
                their private label look towards product launch services.
              </Typography>

              <Button
                variant="outlined"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{
                  marginTop: 4,
                  border: "none",
                }}
              >
                Talk to a Product Launch Specialist. Call Us Now!
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/productlaunch2.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 8 }}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/productlaunch3.jpg"}
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
                We excel at product launches.
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Seller Interactive has the knowledge, tools, and expertise in
                Amazon product launch service. Our team works with you to
                successfully launch your products. As a professional group of
                sellers familiar with the processes - our team can confidently
                say that launching your products is one of the services we
                proudly excel in.
              </Typography>
              <Button
                variant="outlined"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{
                  marginTop: 4,
                  border: "none",
                }}
              >
                Talk to a Product Launch Specialist. Call Us Now!
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
                Save time and money with us.
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                We understand that the costs of FBA can increase very quickly.
                Providing this service for sellers and relying on our expertise
                allows you to maximize your available resources while avoiding
                pitfalls. Following an Amazon Product Launch Strategy prevents
                you from spending time and money with little return. Instead, it
                will enable you to optimize your time focusing on other business
                operations.
              </Typography>

              <Button
                variant="outlined"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{
                  marginTop: 4,
                  border: "none",
                }}
              >
                Talk to a Product Launch Specialist. Call Us Now!
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/productlaunch4.jpg"}
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
            Our Product Launch service covers:
          </Typography>{" "}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Grid container spacing={2} sx={{ marginTop: 3 }}>
                <Grid item xs={2} sm={2} md={1} lg={1}>
                  <img
                  className="productLaunchCoverImages"
                    src={"/productlaunch5.svg"}
                    width={"60%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={11} lg={11}>
                  <Typography sx={{ fontWeight: 600 }}>Preparation</Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    Before the actual launch, we will perform a comprehensive
                    SEO check to ensure that your brand isn't missing out on any
                    opportunity for obtaining top page rankings. Once evaluated,
                    we'll have identified any gaps in the listing and ensure
                    it's fully optimized.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={1} lg={1}>
                  <img
                  className="productLaunchCoverImages"
                    src={"/productlaunch6.svg"}
                    width={"60%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={11} lg={11}>
                  <Typography sx={{ fontWeight: 600 }}>Optimization</Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    To obtain reach and visibility, we use reliable and
                    reputable tools and methods to optimize your listings and
                    the development of the launch strategy.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={2} sm={2} md={1} lg={1}>
                  <img
                    className="productLaunchCoverImages"
                    src={"/productlaunch7.svg"}
                    width={"60%"}
                    alt={"Addian Management"}
                  />
                </Grid>
                <Grid item xs={10} sm={10} md={11} lg={11}>
                  <Typography sx={{ fontWeight: 600 }}>Conversion</Typography>
                  <Typography sx={{ paddingTop: 1 }}>
                    After the launch, it is essential to maintain your listings'
                    high ranking. We supply vital metrics and information to
                    preserve the conversation rates needed for excellent
                    positioning.
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={2} sm={2} md={1} lg={1}></Grid>
            </Grid>
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
          <OurPartners />
          <ThrivingAmazon />
        </Box>
      </Container>
    </Fragment>
  );
};

export default ProductLanch;
