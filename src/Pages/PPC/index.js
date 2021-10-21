import React from "react";
import { Button, Grid, Typography, Box, CardMedia } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LatestPosts from "../../Components/LatestPosts";
import OurPartners from "../../Components/OurPartners";
import ThrivingAmazon from "../../Components/ThrivingAmazon";

const postData = [
  {
    id: `blog-post-3`,
    url: "/ppc5.jpg",
    postdate: "OCTOBER 18, 2021",
    posttitle: "Understanding The Different Classes of Amazon Reimbursements",
    postcontent:
      "Have you ever been reimbursed by Amazon? If so, what classes of reimbursement did you receive? Unfortunately, many sellers are unaware of the process for refund reimbursements for Amazon FBA. Many even wonder why Amazon is paying you back at all! In this blog post, we'll examine the different types of Amazon reimbursements and how […]",
  },
  {
    id: `blog-post-2`,
    url: "/ppc6.jpg",
    postdate: "OCTOBER 16, 2021",
    posttitle:
      "4 Ways How an Amazon Listing Optimization Service Can Help Improve Your Listings",
    postcontent:
      "Did you know that a third of all product searches start on Amazon? With the immense volume of traffic the platform gets every day, it is no surprise that many businesses are looking for ways to improve their rankings and increase visibility. That is where a reliable Amazon listing optimization service comes in handy! In […]",
  },
  {
    id: `blog-post-3`,
    url: "/amazon7.jpg",
    postdate: "OCTOBER 12, 2021",
    posttitle:
      "How an Amazon FBA Account Manager Will Make Your Business Amazon-Compliant",
    postcontent:
      "When you're selling on Amazon, you’re up against so many other sellers on the platform. This is why so many people decide to work with an Amazon FBA account manager. Aside from leveraging your advantage against all your other competitors, they provide guidance and in other areas of your business, including making your business Amazon […]",
  },
];
const PPC = () => {
  return (
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
          sx={{
            marginTop: 8,
          }}
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
            PPC Management Services.{" "}
          </Typography>{" "}
          <Typography variant="subtitle1" gutterBottom component="div">
            Amazon PPC campaigns are one of the key elements to a successful
            listing. When done efficiently, PPC can increase your visibility and
            scale your business.
          </Typography>{" "}
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3 }}
            gutterBottom
            component="div"
          >
            Amazon advertising can quickly become overwhelming and challenging
            without proper management. With rising advertising costs,
            ill-managed manual campaigns, and no clear strategy, the amount of
            time and effort can become exhausting for many sellers.
          </Typography>{" "}
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3 }}
            gutterBottom
            component="div"
          >
            Seller Interactive’s Amazon PPC management service provides
            strategic solutions for your Amazon products. Our team of expert PPC
            specialists develops campaigns explicitly catered to your industry
            to help maximize your sales on Amazon while keeping your costs low.
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
          sx={{
            marginTop: 10,
          }}
        >
          <img
            style={{
              borderRadius: "2%",
            }}
            src={"/ppc1.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />{" "}
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
        Communicate your brand’s benefits
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
        strategically.
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
            Leave it to the experts
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            Managing the entire process requires comprehensive know-how of the
            Amazon platform. Given its algorithm, placing sponsored display ads
            strategically can prove tricky. That’s why, to minimize risks while
            boosting advantages, leave the ad campaign management to the experts
            at Seller Interactive.
          </Typography>

          <Button
            variant="outlined"
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              marginTop: 4,
              border: "none",
            }}
          >
            Work with an Amazon PPC Expert. Call Us Now!
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/ppc2.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 8 }}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/ppc3.jpg"}
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
            Boost the growth of your business
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            When you partner with us, expect that we’ll provide only optimal
            services required to boost your business’s continuous growth. We
            make this possible by combining our expertise in navigating Amazon
            with state-of-the-art tools designed specifically for this purpose.
          </Typography>
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              marginTop: 4,
              border: "none",
            }}
          >
            Work with an Amazon PPC Expert. Call Us Now!
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
            Increase customer reach
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            We use our advertising and marketing expertise to reach out to your
            customers in the most strategic way possible. We aim to effectively
            communicate your brand’s benefits every step of the way—from
            promoting brand awareness to boosting conversion rates during the
            purchasing stage and building a solid customer base by encouraging
            loyalty.
          </Typography>

          <Button
            variant="outlined"
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              marginTop: 4,
              border: "none",
            }}
          >
            Work with an Amazon PPC Expert. Call Us Now!
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/ppc4.jpg"}
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
        Sponsored Ads Management solutions:
      </Typography>{" "}
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        sx={{
          marginTop: 2,
          textAlign: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        To ensure that your brand maintains an above-par performance, our
        advertising campaign management services cover Amazon’s advertising
        solutions.
      </Typography>{" "}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={12} md={10} lg={10}>
          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            <Grid item xs={12} sm={12} md={1} lg={1}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/ppc1.svg"}
                width={"60%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={11} lg={11}>
              <Typography sx={{ fontWeight: 600 }}>
                Sponsored Products
              </Typography>
              <Typography sx={{ paddingTop: 1 }}>
                Making your products visible to your target market is our goal.
                We ensure that your ads appear in search results and detail
                pages.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={12} sm={12} md={1} lg={1}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/ppc2.svg"}
                width={"60%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={11} lg={11}>
              <Typography sx={{ fontWeight: 600 }}>Sponsored Brands</Typography>
              <Typography sx={{ paddingTop: 1 }}>
                This solution—features your brand logo, customized headline, and
                1-3 products—lets you flaunt your brand and portfolio. We ensure
                that your advertisements appear in your customers’ search
                results every time.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={12} sm={12} md={1} lg={1}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/ppc3.svg"}
                width={"60%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={11} lg={11}>
              <Typography sx={{ fontWeight: 600 }}>
                Product Photography
              </Typography>
              <Typography sx={{ paddingTop: 1 }}>
                Perfect images that conform to Amazon’s guidelines make your
                products stand out. To ensure that your product detail pages get
                the best shots, tap our in-house photographer’s expertise. His
                combined skill in photography and experience in Amazon product
                shoots guarantee optimal images for your listings.
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 10 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            2021 PPC Amazon PPC agency.
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Do you want to learn more about how you can apply PPC techniques for
            your Amazon business?
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Here’s a video with Philip, one of our PPC Specialists, breaking
            down the impact of PPC Ads and Cost per Click CPC when used to your
            listings early on and aggressively. You’ll be amazed at the ROI. The
            video will also share how much budget you should set for your
            campaigns.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CardMedia
            height="100%"
            component="iframe"
            image="https://www.youtube.com/embed/tnuNx6VmObs"
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
              What is Amazon PPC?
            </Typography>
          </div>
          <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
            Amazon PPC is an advertising feature available to Amazon Sellers who
            want to increase the visibility of their product listings on Amazon
            quickly, whether they use it as an Amazon product launch service or
            to help boost the visibility of their existing listing.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ paddingLeft: 6, paddingTop: 3 }}
          >
            PPC stands for Pay Per Click, a digital advertising term where you
            pay for the number of clicks your ad receives to increase the chance
            of sale with every click.
          </Typography>
          <div style={{ display: "flex", marginTop: 20 }}>
            <KeyboardArrowRightIcon
              style={{ paddingLeft: 20, paddingRight: 10 }}
            />

            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              How to do Amazon PPC effectively?
            </Typography>
          </div>

          <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
            There are various strategies on how to sell on Amazon with Amazon
            PPC. The factors involved include industry, product, audience,
            budget, and more. The general idea is for Amazon sellers to pay for
            ads that contain specific search terms, keyword research, and
            negative keywords to increase their product's chances of appearing
            after a query. Once the shopper clicks on your ad, it comes out of
            your pocket, so it's essential to monitor your ad spend.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ paddingLeft: 6, paddingTop: 3 }}
          >
            Because of this ad strategy's nature, conversation rates could
            become unpredictable advertising costs could fluctuate without
            proper management. It's important to consider all of your business's
            elements to deliver an effective Amazon advertising campaign while
            providing Amazon Ongoing Optimization.
          </Typography>
          <div style={{ display: "flex", marginTop: 20 }}>
            <KeyboardArrowRightIcon
              style={{ paddingLeft: 20, paddingRight: 10 }}
            />

            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              How to set up PPC on Amazon?
            </Typography>
          </div>
          <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
            Your Amazon PPC Campaign is implemented directly on the Seller
            Central platform. There is a vast amount of information available to
            your once you begin building your campaigns to identify your
            strategy's key metrics, strengths, and weaknesses.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
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
  );
};

export default PPC;
