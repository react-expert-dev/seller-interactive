import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import OurPartners from "../../Components/OurPartners";
import "./style.css";

const blogPosts = [
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
    postcontent: "So you're planning on setting up a seller account to begin your eCommerce journey on Amazon. Congratulations! Amazon is the largest online marketplace, so this opportunity could lead you to a bright future. In 2019, Amazon produced 354 billion US Dollars annually from eCommerce sales. Today, Amazon continues to dominate the eCommerce business, with projected […]",
  },
  {
    id: `blog-post-3`,
    url: "/amazon7.jpg",
    postdate: "OCTOBER 12, 2021",
    posttitle: "How an Amazon FBA Account Manager Will Make Your Business Amazon-Compliant",
    postcontent: "When you're selling on Amazon, you’re up against so many other sellers on the platform. This is why so many people decide to work with an Amazon FBA account manager. Aside from leveraging your advantage against all your other competitors, they provide guidance and in other areas of your business, including making your business Amazon […]",
  },
];
const AmazonAccountMangement = () => {
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
            Account Management Services.{" "}
          </Typography>{" "}
          <Typography variant="subtitle1" gutterBottom component="div">
            Maintaining a healthy Seller Account in the Amazon Marketplace is a
            must to scale your business. You don't want to spend your time on
            taxing issues that will affect your operations' flow, which means
            wasted potential revenue.
          </Typography>{" "}
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3 }}
            gutterBottom
            component="div"
          >
            Our team at Seller Interactive will provide you a comprehensive
            approach in Amazon support handling, optimizing the customer service
            experience, and protecting your seller account health in all
            aspects.
          </Typography>{" "}
          <Button
            variant="contained"
            sx={{
              marginTop: 5,
              borderRadius: 2,
            }}
          >
            Convert Your Traffic To Sales. Call Us Now!{" "}
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
            src={"/amazon1.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />{" "}
        </Grid>{" "}
      </Grid>{" "}
      <Grid container spacing={4} sx={{ marginTop: 5 }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive4.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600, paddingTop: 3 }}>
            Scale your Amazon business
          </Typography>
          <Typography>
            How to get an Amazon account manager to help scale your business is
            easy. We will set the stage to support you as you grow your business
            on Amazon. Our team of knowledgeable Amazon consultants will guide
            your store towards success.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/amazon3.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600, paddingTop: 2 }}>
            Maximize potential revenue
          </Typography>
          <Typography>
            Selling on Amazon has its challenges and roadblocks. Seller
            Interactive provides you with the strategies and management services
            to increase your conversion rate.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive2.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />

          <Typography sx={{ fontWeight: 600, paddingTop: 1 }}>
            Comprehensive support
          </Typography>
          <Typography>
            If you need Amazon support, look no further. Our team of experienced
            and knowledgeable Amazon sellers and consultants are happy to advise
            you on finding the best solutions.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{
              marginTop: 10,
              fontWeight: 800,
            }}
          >
            Premium account{" "}
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
            management strategies that work.{" "}
          </Typography>{" "}
          <Typography variant="subtitle1" gutterBottom component="div">
            As the largest e-commerce platform in the world, Amazon opens
            sellers to a wealth of opportunities for starting and developing a
            thriving business. With its expansive customer base, you'll always
            have an opportunity for turning a huge profit from selling your
            products. However, given the strict guidelines and standards of the
            marketplace, your account's strategic management is a must.
          </Typography>{" "}
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3 }}
            gutterBottom
            component="div"
          >
            For this purpose, you can always rely on Seller Interactive's
            professional service. With us, your business is always in the best
            hands. We provide comprehensive management services focused on
            optimizing your operations. Our advanced tactics and customized
            approach are tailored to maximize your potential while accounting
            for the details on Amazon.
          </Typography>{" "}
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
              marginTop: 60,
            }}
            src={"/amazon4.jpg"}
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
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/amazon5.svg"}
                width={"80%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Typography sx={{ fontWeight: 600 }}>
                Setting Up a Seller Central Account
              </Typography>
              <Typography sx={{ paddingTop: 1 }}>
                Issues concerning your seller account will never be a problem
                with us at the helm. We'll resolve these immediately and guide
                you through all the intricacies of registering your account.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/amazon6.svg"}
                width={"80%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Typography sx={{ fontWeight: 600 }}>
                Search Engine Optimization (SEO)
              </Typography>
              <Typography sx={{ paddingTop: 1 }}>
                Boosting your organic rankings will never be a problem when you
                count on our expertise. We know how important keywords are to
                improving your brand's visibility on Amazon. That's why we make
                it a point to use only the most profitable ones for your
                product, including long-tail, high-volume keywords unknown to
                your competitors.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/amazon7.svg"}
                width={"80%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Typography sx={{ fontWeight: 600 }}>
                Product Listing Management
              </Typography>
              <Typography sx={{ paddingTop: 1 }}>
                We handle all processes involving your product listings, from
                placing them in their specific category down to adding specific
                details like SKU, content, search terms, attributes, and more.
                Additionally, we also take charge of doing bulk and parent-child
                listings for your products on Amazon and other details that
                contribute towards winning the buy box through Seller Central.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/amazon8.svg"}
                width={"80%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Typography sx={{ fontWeight: 600 }}>Product Launch</Typography>
              <Typography sx={{ paddingTop: 1 }}>
                Launch your private label the right way by taking advantage of
                our product launch services. With us at the helm, you can look
                forward to a strategically planned and executed launch that
                elicits favorable customer feedback. We use effective marketing
                techniques and combine these with adequate brand-protective
                measures that keep your content safe from hijackers and
                counterfeiters in the Amazon Marketplace.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/amazon9.svg"}
                width={"80%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Typography sx={{ fontWeight: 600 }}>
                Listing Optimization
              </Typography>
              <Typography sx={{ paddingTop: 1 }}>
                In optimizing your product pages, we maximize keyword rankings.
                Our SEO proficiency allows us to efficiently utilize them for
                increasing and maintaining your pages' conversion rates.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/amazon10.svg"}
                width={"80%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Typography sx={{ fontWeight: 600 }}>
                Enhanced Brand Content
              </Typography>
              <Typography sx={{ paddingTop: 1 }}>
                Allow us to improve your listing's conversion rate by
                highlighting your product's benefits with Enhanced Brand
                Content. We'll provide keyword-indexed compelling copies that
                elaborate further on the advantages your product offers. These
                will be presented in a strategic layout with captivating images
                that perfectly complement the targeted descriptions.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/amazon11.svg"}
                width={"80%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Typography sx={{ fontWeight: 600 }}>
                Brand Registry & Protection
              </Typography>
              <Typography sx={{ paddingTop: 1 }}>
                Registering your brand on Amazon is an extensive procedure
                requiring concentrated effort and ample time. In partnering with
                our account management team, expect that we'll manage each
                process diligently and take cake charge of submitting your
                documents. We'll safeguard your brand from malicious entities
                such as counterfeiters and unauthorized sellers.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: 1 }}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <img
                style={{ borderRadius: "2%" }}
                src={"/amazon12.svg"}
                width={"80%"}
                alt={"Addian Management"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Typography sx={{ fontWeight: 600 }}>Prep & Logistics</Typography>
              <Typography sx={{ paddingTop: 1 }}>
                As your reliable third-party prep service provider, we take
                charge of handling all your shipment-related necessities. Our
                unquestionable experience has made us fully knowledgeable of all
                the rules and guidelines involving shipments and how to manage
                Amazon accounts.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={7} direction="row">
        {blogPosts?.map((sucess, index) => (
          <Grid
            item
            xs={12}
            md={4}
            sm={12}
            lg={4}
            key={`${index}-blog-post-${sucess?.id}`}
          >
            <Box>
              <div className="latestPostDiv">
                <img
                  className="postImage"
                  style={{ borderRadius: "2%", textAlign: "center" }}
                  src={sucess?.url}
                  width={"90%"}
                  alt={"Addian Management"}
                />
                <Typography
                  sx={{ fontWeight: 600, marginTop: 1 }}
                  className="postDate"
                >
                  {sucess?.postdate}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, marginTop: 1 }}
                  className="postTitle"
                >
                  {sucess?.posttitle}
                </Typography>
                <Typography sx={{ marginTop: 1 }} className="postContent">
                  {sucess?.postcontent}
                </Typography>
              </div>
            </Box>
          </Grid>
        ))}
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

export default AmazonAccountMangement;
