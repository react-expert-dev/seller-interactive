import React, { Fragment } from "react";
import { Button, Grid, Typography, Box, CardMedia } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
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
const ListingOptimization = () => {
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
                Listing Optimization{" "}
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
                Amazon’s ever-changing algorithm makes it difficult to keep up.
                Yesterday’s best practices on images and keywords may not
                necessarily work today. A ‘fully optimized listing’ essentially
                has an adaptable strategy because “Set it and Forget it.” simply
                won’t cut it.
              </Typography>{" "}
              <Typography variant="subtitle1" gutterBottom component="div">
                Seller Interactive understands what’s being evaluated in your
                Amazon listing, making it a valuable search result to potential
                customers. Our team focuses on assessing your listing and
                scanning it for any strategic gaps. We monitor, update, and
                deliver high-quality listings for shoppers and the Amazon
                algorithm.
              </Typography>{" "}
              <Button
                variant="contained"
                sx={{
                  marginTop: 5,
                  borderRadius: 2,
                }}
              >
                Optimize Your Listing. Call us Now!{" "}
              </Button>{" "}
            </Grid>{" "}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
             
            >
              <img
                src={"/listing1.jpg"}
                alt={"hero-image"}
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: 10 }}
              />
            </Grid>{" "}
          </Grid>{" "}
          <Grid container spacing={4} sx={{ marginTop: 5 }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/listing2.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />
              <Typography sx={{ fontWeight: 600, paddingTop: 3 }}>
                Drive More Sales
              </Typography>
              <Typography>
                Putting together well-constructed listings increases the chances
                for shoppers to find you. Having your product detailed in a way
                that accurately highlights the product features gives potential
                buyers more reason to purchase and leave a product review.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/listing3.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />
              <Typography sx={{ fontWeight: 600, paddingTop: 2 }}>
                Increase Traffic
              </Typography>
              <Typography>
                Pages with high conversion rates also rank high in customer
                searches. Amazon awards this boost to pages that convert more.
                This privilege further increases your brand’s online visibility
                and influence. With more customers exposed to your product
                pages, your sales are bound to increase as well.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/listing3.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />

              <Typography sx={{ fontWeight: 600, paddingTop: 2 }}>
                Build Brand Trust
              </Typography>
              <Typography>
                A well-optimized listing page is a well-communicated offer by
                the seller to both the customer and Amazon’s algorithm. Ensuring
                that your detail page is optimized means delivering shoppers
                with all the information they need (description & images) prior
                to purchase. The more accurate your listing, the better brand
                trust you can develop with your customers.
              </Typography>
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
            Stay Head of the competition.
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
            profitable heights.
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
                Stay Head of the competition.
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                At Seller Interactive, ensuring that your brand stays ahead of
                the competition is our goal. We do much more than help you
                create the ideal product pages complete with the product images
                and bullet points. To help your brand maintain its optimal
                ranking, we also perform ongoing optimization.
              </Typography>

              <Button
                variant="outlined"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{
                  marginTop: 4,
                  border: "none",
                }}
              >
                Optimize Your Listing. Call Us Now!
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/listing5.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 8 }}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/listing6.jpg"}
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
                Drive Conversion Rates.
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                In optimizing your product pages, we maximize keyword rankings.
                Our SEO proficiency allows us to efficiently utilize them for
                increasing and maintaining your pages’ conversion rates.
              </Typography>
              <Button
                variant="outlined"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{
                  marginTop: 4,
                  border: "none",
                }}
              >
                Optimize Your Listing. Call Us Now!
              </Button>
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
                  How to Optimize Product Listing on Amazon?
                </Typography>
              </div>
              <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
                Optimizing Amazon product pages consist of several vital
                factors. To get your listing optimized, you’ll want to ensure
                that the below sections are regularly monitored and updated as
                needed. On-going evaluations are crucial to climbing the search
                results and staying there:
              </Typography>
              <div style={{ display: "flex", marginTop: 10 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Strategic Product Title
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Well written Product Descriptions
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  High Quality Product Images
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Thoroughly researched backend keywords
                </Typography>
              </div>

              <div style={{ display: "flex", marginTop: 25 }}>
                <KeyboardArrowRightIcon
                  style={{ paddingLeft: 20, paddingRight: 10 }}
                />

                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  How do I get my product noticed on Amazon?
                </Typography>
              </div>
              <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
                Many Amazon Sellers do the following to get noticed: A
                well-optimized product listing and an effective PPC campaign.
                Having these two increase the chance for visibility and
                searchability,
              </Typography>
              <div style={{ display: "flex", marginTop: 25 }}>
                <KeyboardArrowRightIcon
                  style={{ paddingLeft: 20, paddingRight: 10 }}
                />

                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  What makes a good product page?
                </Typography>
              </div>
              <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
                A good product page consists of:
              </Typography>
              <div style={{ display: "flex", marginTop: 10 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">High-quality images</Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Including the right keywords for your product description
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Keyword researched content (title, listings, bullet points)
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">Backend Keywords</Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Genuine positive reviews
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">Answered questions</Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Stellar customer support
                </Typography>
              </div>
              <Typography
                variant="subtitle1"
                sx={{ paddingLeft: 6, marginTop: 1 }}
              >
                Even further, it’s always a bonus to include:
              </Typography>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Amazon Brand Storefront
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">EBC Content</Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">Product Videos</Typography>
              </div>
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
                    Seller Interactive will help you get started on the right
                    foot when selling on Amazon. We'll provide you with the
                    structure and support needed to have strong foundations and
                    success on Amazon.
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
                    Our team knows just how valuable it is to have effective
                    keywords in your listings, and that's why we do it so well.
                    SEO provides your listing with the visibility it deserves so
                    that shoppers can easily find and buy your product. We make
                    it a point to use only the most profitable ones for your
                    product, including long-tail, high-volume keywords unknown
                    to your competitors.
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
                    We control the product listing management process from start
                    to finish. This includes ensuring your product is correctly
                    categorized, attributes are filled in, search terms are
                    researched, listing parent-child listings, and so much more.
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
                    Product Launch Product launches can get challenging at
                    times, but Seller Interactive helps alleviate all the pain
                    points of getting it done right. With our team, you can look
                    forward to a launch that elicits favorable customer
                    feedback. Our attention to detail and awareness of the
                    platform allows us to detect and prevent potential hijackers
                    and counterfeiters in the Amazon Marketplace.
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
                    Listing Optimization is an on-going process that requires
                    continuous attention to trends, competitors, and Amazon
                    updates. Keeping up with these changes gives you the
                    competitive advantage needed to succeed on Amazon. Our SEO
                    proficiency allows us to efficiently utilize them for
                    increasing and maintaining your pages' conversion rates.
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
                    EBC is a great way to highlight your product's benefits
                    while personalizing it to your brand's image. Allow us to
                    improve your listing's conversion rate by providing
                    keyword-indexed compelling copies that elaborate further on
                    the advantages your product offers. These will be presented
                    in a strategic layout with captivating images that perfectly
                    complement the targeted descriptions.
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
                    Registering your brand on Amazon is an essential factor that
                    can give your listings a competitive advantage over other
                    sellers. It consists of an extensive process with
                    concentrated effort and ample time. In partnering with our
                    account management team, expect that we'll manage each
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
                    charge of handling all your shipment-related necessities.
                    Our unquestionable experience has made us fully
                    knowledgeable of all the rules and guidelines involving
                    shipments and how to manage Amazon accounts.
                  </Typography>
                </Grid>
              </Grid>
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

export default ListingOptimization;
