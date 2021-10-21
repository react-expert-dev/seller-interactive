import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import LatestPosts from "../../Components/LatestPosts";
import OurPartners from "../../Components/OurPartners";

const postData = [
  {
    id: `blog-post-3`,
    url: "/amazon5.jpg",
    postdate: "OCTOBER 14, 2021",
    posttitle: "Amazon DSP Program: Why It's Worth Investing on It This 2021",
    postcontent:
      "If you're already selling on Amazon, you know how tight the competition is. So it's only reasonable that you do everything you can to increase leverage against your competitors. This is one of the reasons why you should consider enrolling in the Amazon DSP Program. Learn more about what this advertising program is all about […]",
  },
  {
    id: `blog-post-2`,
    url: "/amazon6.jpg",
    postdate: "OCTOBER 13, 2021",
    posttitle:
      "Top 4 Mistakes New Sellers Make Without Amazon Management Services",
    postcontent:
      "So you're planning on setting up a seller account to begin your eCommerce journey on Amazon. Congratulations! Amazon is the largest online marketplace, so this opportunity could lead you to a bright future. In 2019, Amazon produced 354 billion US Dollars annually from eCommerce sales. Today, Amazon continues to dominate the eCommerce business, with projected […]",
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

const AmazonSEO = () => {
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
              marginTop: -3,
              fontWeight: 800,
            }}
          >
            SEO Services.{" "}
          </Typography>{" "}
          <Typography variant="subtitle1" gutterBottom component="div">
            Understanding how Amazon SEO works is crucial for your listings’
            success. With the number of competitors in the marketplace, getting
            noticed on Amazon search results can become challenging.
          </Typography>{" "}
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3 }}
            gutterBottom
            component="div"
          >
            Seller Interactive can make the difference in how your product ranks
            on Amazon. Our consultants are the experts when it comes to SEO
            practice. From understanding the Amazon a10 algorithm to optimizing
            the relevant keywords, our team is ready to help you sell on Amazon.
          </Typography>{" "}
          <Button
            variant="contained"
            sx={{
              marginTop: 5,
              borderRadius: 2,
            }}
          >
            Work with an Amazon SEO Expert. Call us Now!{" "}
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
            src={"/seo1.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />{" "}
        </Grid>{" "}
      </Grid>{" "}
      <Grid container spacing={4} sx={{ marginTop: 5 }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/seo2.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600, paddingTop: 3 }}>
            Increased revenue
          </Typography>
          <Typography>
            Being optimized for popular search queries is key to ranking well.
            Once your product gains exposure, the higher the chance is for sale.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/seo3.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600, paddingTop: 2 }}>
            Better quality leads
          </Typography>
          <Typography>
            When your product pages are well structured, the better you can be
            at reaching the target audience who are already looking for your
            product on Amazon.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/seo4.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />

          <Typography sx={{ fontWeight: 600, paddingTop: 2.5 }}>
            Stronger online presence
          </Typography>
          <Typography>
            Standing out among similar products is challenging. With the right
            attention on important ranking factors, the better reach you’ll get
            resulting in a more substantial online presence for your brand and
            products.
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
        Move your brand forward with an
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
        Amazon SEO Expert.
      </Typography>{" "}
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, textAlign: "center", marginTop: 10 }}
      >
        Your success is our success.
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive9.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
            Elevate your page ranking
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            Increasing your product’s profitability on Amazon becomes easy when
            you work with Seller Interactive. An expert team of SEO service
            providers focused on the world’s largest e-commerce platform, we’re
            confident of elevating your pages’ rankings to profitable heights.
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            Our SEO Services include:
          </Typography>
          <div style={{ display: "flex", marginTop: 20 }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">Keyword Research</Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">
              Amazon Ongoing Optimization
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">
              Product description and title optimization
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">Image Optimization</Typography>
          </div>
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              marginTop: 4,
              border: "none",
            }}
          >
            Work with an Amazon SEO Expert. Call Us Now!
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%", marginTop: 40 }}
            src={"/seo5.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 8 }}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/seo6.jpg"}
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
            Work with an Amazon SEO Expert. Call Us Now!
          </Button>
        </Grid>
      </Grid>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, textAlign: "center", marginTop: 10 }}
      >
        What is Amazon SEO?
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <div style={{ display: "flex" }}>
            <KeyboardArrowRightIcon
              style={{ paddingLeft: 20, paddingRight: 10 }}
            />

            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              What is Amazon SEO?
            </Typography>
          </div>
          <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
            Amazon SEO is the practice of ensuring that the content you have on
            your product listings is optimized for the marketplace. When done
            correctly, Amazon’s search algorithm can more efficiently pick up
            your listings and display them to the right shoppers.
          </Typography>
          <div style={{ display: "flex", marginTop: 25 }}>
            <KeyboardArrowRightIcon
              style={{ paddingLeft: 20, paddingRight: 10 }}
            />

            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              How to Improve SEO on Amazon?
            </Typography>
          </div>
          <Typography variant="subtitle1" sx={{ paddingLeft: 6 }}>
            Improving SEO on Amazon consists of various ranking factors. A great
            way to get started is by making sure that the below are practiced:
          </Typography>
          <div style={{ display: "flex", marginTop: 10 }}>
            <DoubleArrowIcon style={{ paddingLeft: 70, paddingRight: 10 }} />
            <Typography variant="subtitle1">
              Amazon product title optimization
            </Typography>
          </div>
          <div style={{ display: "flex", marginTop: 5 }}>
            <DoubleArrowIcon style={{ paddingLeft: 70, paddingRight: 10 }} />
            <Typography variant="subtitle1">
              Including the right keywords for your product description
            </Typography>
          </div>
          <div style={{ display: "flex", marginTop: 5 }}>
            <DoubleArrowIcon style={{ paddingLeft: 70, paddingRight: 10 }} />
            <Typography variant="subtitle1">Updated bullet points</Typography>
          </div>
          <div style={{ display: "flex", marginTop: 5 }}>
            <DoubleArrowIcon style={{ paddingLeft: 70, paddingRight: 10 }} />
            <Typography variant="subtitle1">
              Relevant backend keywords
            </Typography>
          </div>
          <div style={{ display: "flex", marginTop: 5 }}>
            <DoubleArrowIcon style={{ paddingLeft: 70, paddingRight: 10 }} />
            <Typography variant="subtitle1">Clear product images</Typography>
          </div>
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
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#fb3767",
            backgroundImage: `url(${"/amazonbg.png"})`,
            borderRadius: 3,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              textAlign: "center",
              color: "#ffffff",
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  fontWeight: 800,
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                Go from surviving to thriving on Amazon.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ marginTop: 3, paddingLeft: 10, paddingRight: 10 }}
              >
                Use the power and influence of advertising to increase sales.
                Learn more about how you can benefit from our management
                expertise.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: 6,
                }}
              >
                Convert Your Traffic To Sales. Call Us Now!
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AmazonSEO;
