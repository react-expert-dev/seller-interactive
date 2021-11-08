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
const ProtectionAssistance = () => {
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
                Brand Protection{" "}
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
                Solution.{" "}
              </Typography>{" "}
              <Typography variant="subtitle1" gutterBottom component="div">
                Dealing with a counterfeit seller or hijacker can get expensive
                fast. As Amazon sellers, you’ll be facing constant challenges
                with your product listings. Without the necessary protection
                against these violators, your sales will take a huge impact, and
                so will your expenses. At Seller Interactive, we want to
                alleviate these stresses by providing the support and assistance
                you need to protect your brand on Amazon.
              </Typography>{" "}
              <Typography variant="subtitle1" gutterBottom component="div">
                Seller Interactive puts up the necessary protection needed to
                prevent your listing from common nuisances. This includes
                counterfeit products, unauthorized sellers, fake reviews, and
                more. The quicker you take measures to avoid these, the faster
                and stronger you can grow your brand on the Amazon marketplace.
              </Typography>{" "}
              <Button
                variant="contained"
                onClick={() => clickHandler(Root_Routes?.contact_us)}
                sx={{
                  marginTop: 5,
                  borderRadius: 2,
                }}
              >
                Protect Your Account. Call us Now!{" "}
              </Button>{" "}
            </Grid>{" "}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
             
            >
              <img
                src={"/protection1.jpg"}
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
                src={"/protection2.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />
              <Typography sx={{ fontWeight: 600, paddingTop: 3 }}>
                Close Monitoring
              </Typography>
              <Typography sx={{ marginTop: 2 }}>
                As sly as hijackers and counterfeiters are, they leave tell-tale
                indications that give them away. These can be hard to detect to
                untrained eyes, but not with our hawk-eyed team. Our expertise
                in the field and vigilance in monitoring your brand account and
                activities allow us to spot the presence of such sellers long
                before they can do any damage.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/protection3.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />
              <Typography sx={{ fontWeight: 600, paddingTop: 2 }}>
                Immediate Measures
              </Typography>
              <Typography sx={{ marginTop: 2 }}>
                Our ability to spot dishonest business practices and the
                entities behind them is backed up by a comprehensive knowledge
                of apprehending them correctly. As soon as we’ve confirmed their
                presence, we immediately perform measures under Amazon FBA
                guidelines. We carry these out without hesitation to protect
                your brand while bringing black-hat practitioners to justice.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/protection4.svg"}
                width={"13%"}
                alt={"Addian Management"}
              />

              <Typography sx={{ fontWeight: 600, paddingTop: 2 }}>
                Reliable Protection
              </Typography>
              <Typography sx={{ marginTop: 2 }}>
                Our extensive experience on Amazon has equipped us with a
                comprehensive knowledge of its guidelines and standards. Given
                our training and dedication in delivering results that meet or
                even exceed expectations, count on us to be your first line of
                defense against any threat in the marketplace.
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
            Secure your business’s growth with
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
            Brand Protection Services.
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
                Protect your brand against hi-jackers.
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Unscrupulous sellers on Amazon are on the rise. They're
                hijackers and counterfeiters trying to resell your product and
                conduct business using black hat practices. Their presence
                threatens scrupulous sellers like you. Without adequate
                protection, your products on Amazon are at serious risk. To
                safeguard it, count on Seller Interactive's expert guidance and
                protection.
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
                Protect Your Account. Call Us Now!
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/protection5.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 8 }}>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/protection6.jpg"}
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
                We believe in honest business.
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Having conducted honest business on Amazon for several years
                now, we have mastered its ins and outs. With this comes
                awareness and vigilance of malicious entities that are out to
                make a profit even at the expense of driving other businesses to
                ruin.
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
                Protect Your Account. Call Us Now!
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
                Solutions to secure your brand.
              </Typography>
              <Typography sx={{ marginTop: 3 }}>
                Don't let hijackers and counterfeiters impede your business's
                growth. Defend your brand by allying with our team. We provide
                tactical solutions for effectively detecting threats, hence
                protecting your brand and securing your business's interest.
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
                Protect Your Account. Call Us Now!
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/protection7.jpg"}
                width={"100%"}
                alt={"Addian Management"}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: 10 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
          Dealing with Amazon Hijackers.
          </Typography>
          
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
          If you’re currently experiencing being hijacked on your Amazon Listings, here are 3 tips that you could do to protect yourself away from these counterfeiters. It can really be frustrating, but sooner you prevent and resolve them, the less money you will lose.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CardMedia
            height="100%"
            component="iframe"
            image="https://www.youtube.com/embed/99DS1ikm_hI"
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
                  How to protect your brand on Amazon?
                </Typography>
              </div>
              <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
                There are several ways to protect brand from unauthorized
                sellers on Amazon:
              </Typography>
              <div style={{ display: "flex", marginTop: 10 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Amazon Brand Registry
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Bundle your products
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Awareness of strange product reviews
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Custom Logos and Packaging
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: 5 }}>
                <DoubleArrowIcon
                  style={{ paddingLeft: 70, paddingRight: 10 }}
                />
                <Typography variant="subtitle1">
                  Protection of Intellectual Property
                </Typography>
              </div>
              <Typography
                variant="subtitle1"
                sx={{ paddingLeft: 6, paddingTop: 2 }}
              >
                Using these methods and resources available to you by Amazon is
                a great way to get started. The process and upkeep are crucial
                to maintaining your listings' safety, so it's essential to
                continuously keep an eye out for any suspicious activity.
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
                    Getting started on Amazon can get tricky - it's essential to
                    build a strong foundation for your product and storefront to
                    set yourself up for success. Seller Interactive helps you
                    get the wheels moving so that your seller account is in the
                    right position for marketing, inventory, account health, and
                    more.
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
                    Emphasizing the importance of Search Engine Optimization on
                    Amazon is crucial. SEO is the organic method of bridging the
                    gap between your product listings and Amazon customers.
                    Seller Interactive knows how important keywords are to
                    improving your brand's visibility on Amazon. That's why we
                    make it a point to use only the most profitable ones for
                    your product, including long-tail, high-volume keywords
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
                    precise details like SKU, content, search terms, attributes,
                    and more. Additionally, we also take charge of doing bulk
                    and parent-child listings for your products on Amazon and
                    other details that contribute towards winning the buy box
                    through Seller Central.
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
                    Successful Product Launches can often be a challenging
                    process. With us at the helm, you can look forward to a
                    strategically planned and executed launch that elicits
                    favorable customer feedback. We use effective marketing
                    techniques and combine these with adequate brand-protective
                    measures that keep your content safe from hijackers and
                    counterfeiters in the Amazon Marketplace.
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
                    let's take your Amazon Detail Page to the next level with
                    listing optimization. In optimizing your product page, we
                    look for gaps in your content, opportunities for an upgrade,
                    and thoroughly keyword-researched content. This allows us to
                    utilize them for increasing and maintaining your pages'
                    conversion rates.
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
                    Allow us to improve your listing's conversion rate by
                    highlighting your product's benefits with Enhanced Brand
                    Content. We'll provide keyword-indexed compelling copies
                    that elaborate further on the advantages your product
                    offers. These will be presented in a strategic layout with
                    captivating images that perfectly complement your brand
                    image's targeted descriptions.
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
                    that requires paperwork, effort, and patience. In partnering
                    with our account management team, expect that we'll manage
                    each process diligently and take cake charge of submitting
                    your documents. We'll safeguard your brand from malicious
                    entities such as counterfeiters and unauthorized sellers and
                    optimize on Amazon Brand Registry features.
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
                    Seller Interactive provides safe and reliable services for
                    all your shipment, prep, and logistical needs. Our years of
                    experience in various categories have made us experts in all
                    the rules and guidelines involving shipments and how to
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

export default ProtectionAssistance;
