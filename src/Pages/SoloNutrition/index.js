import React, {Fragment} from "react";
import { Container } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ContactUsSection from "../../Components/ContactUsSection";
import "./style.css";
const SoloNutrition = () => {
  return (
    <Fragment>
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/gatorcable1.svg"}
            width={"100%"}
            alt={"Addian Management"}
          />
          <Typography variant="h1" sx={{ position: "relative", top: -250 }}>
            Solo Nutrition
          </Typography>
          <Typography variant="h2" sx={{ position: "relative", top: -250 }}>
            Case Study.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <div  className="categoriesList">
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, }}
            >
              CATEGORY:
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, marginTop: 1 }}
            >
              Nutrition & Protein Bars
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, marginTop: 2 }}
            >
              MARKETS MANAGED:
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600,  marginTop: 1 }}
            >
              CA & US
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, marginTop: 2 }}
            >
              ASINS:
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, marginTop: 1 }}
            >
              15 ASINs
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, marginTop: 2 }}
            >
              MONTHLY SALES:
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, marginTop: 1 }}
            >
              $20k
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: -20 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h5" sx={{ lineHeight: 1.5 }}>
            How SoLo Nutrition Won with Topline Sales MoM via Seller
            Interactive’s Strategic Marketing Campaign.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            When Mohamed Aden, account manager at Seller Interactive, met with
            Cesar Wong, Director at Gator Cable, they discussed the best ways to
            boost sales on the most prominent online marketplace, Amazon. SI
            officially handled the product management of Gator Cable, starting
            in October 2019. The services covered are:
          </Typography>
          <div style={{ display: "flex", marginTop: 25 }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Amazon SEO
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Sponsored Ads Management
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Marketplace Brand Protection
            </Typography>
          </div>

          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Product Launch Services
            </Typography>
          </div>

          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Enhanced Brand Content
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Systematic Reimbursements
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Ongoing Optimization
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            This is the first time that SoLo Nutrition has ever collaborated
            with an independent marketing firm. The brand, which has 15 ASINs on
            Amazon, has been selling in the Canadian marketplace for six years
            now. Ever since, it has been managing all mar-keting processes
            internally. For over 10 months since June 2019, it has not worked
            with any Amazon experts until the SI team took over.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Taking the Challenge with a Winning Focus
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        The presence of many competitors has made it hard for Solo Nutrition
        Bars to boost sales radically. During their meeting with the SI team,
        they talked about the various road bumps they face. The main objective
        was to identify the best opportunities for growth that is accessible to
        the brand within the product category.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            style={{ borderRadius: "2%", marginTop: 50 }}
            src={"/solonutrition1.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, marginTop: 10 }}
          >
            ADVERTISING
          </Typography>
          <div style={{ paddingLeft: 20, marginTop: 15 }}>
            <Typography variant="subtitle1">
              1. Growing topline sales
            </Typography>
            <Typography variant="subtitle1">
              2. Expand sales through Amazon Marketing Service Campaigns
            </Typography>
            <Typography variant="subtitle1">
              3. Gain market share in the nutrition/protein bar category
            </Typography>
            <Typography variant="subtitle1">
              4. Maintain an ACOS of 30% or lower
            </Typography>
          </div>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, marginTop: 2 }}
          >
            OVERALL ACCOUNT GOALS
          </Typography>
          <div style={{ paddingLeft: 20, marginTop: 15 }}>
            <Typography variant="subtitle1">
              1. Create a unified brand image across all products
            </Typography>
            <Typography variant="subtitle1">
              2. Update all listings images and copies
            </Typography>
            <Typography variant="subtitle1">3. Add A+ content</Typography>
            <Typography variant="subtitle1">4. Add brand store</Typography>
            <Typography variant="subtitle1">5. Launch new products</Typography>
          </div>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Winning with the Right Moves
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            The presence of many competitors has made it hard for Solo Nutrition
            Bars to boost sales radically. During their meeting with the SI
            team, they talked about the various road bumps they face. The main
            objective was to identify the best opportunities for growth that is
            accessible to the brand within the product category.
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 4 }}>
            First up, we gave their storefront on Amazon a much-needed makeover.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3, fontWeight: 600 }}
          >
            We began by revamping their copy and optimizing it using the best
            keywords.
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Then, we went on to further elaborate on the benefits of their
            products by providing a compelling A+ content. It featured lifestyle
            images that showed models enjoying the health bars in various
            situations and settings. Unlike their previous image that showed
            only the product, our copywriting and graphic design team
            collaborated to create the most ideal product listing that focused
            on the brand’s target market and benefits.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3, fontWeight: 600 }}
          >
            To advertise SoLo Nutrition, we combined the following strategic
            customized measures with Amazon’s advertising solutions:
          </Typography>
          <ul style={{ lineHeight: 1.5 }}>
            <li>
              Executed thorough market analysis to identify immediate areas for
              growth
            </li>
            <li>
              Performed in-depth keyword research to find the best long tail
              keywords relevant to the nutrition & protein bar category
            </li>
            <li>Launched brand specific keyword campaigns</li>
            <li>
              Developed promotional strategy to increase sales and conversion
              rates
            </li>
            <li>
              Built effective, low cost advertising campaigns to increase
              product sales history
            </li>
          </ul>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3, fontWeight: 600 }}
          >
            Once completed, the product listing content was forwarded to our
            account managers and heads who reviewed it several times.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3, fontWeight: 600 }}
          >
            This step is necessary for ensuring that every detail of the copy
            and images comply with Amazon’s policies and of course, the high SI
            standards of quality.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Winning Result
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        And the SI team and SoLo Nutrition’s collaborative efforts were not in
        vain. As proven by the certified data illustrated below, SoLo Nutrition
        Bars reaped much more than top-page rankings and a stronger online
        presence.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            style={{ borderRadius: "2%", marginTop: 50 }}
            src={"/solonutrition2.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            style={{ borderRadius: "2%", marginTop: 50 }}
            src={"/solonutrition3.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          style={{ borderRadius: "2%" }}
          src={"/solonutrition4.png"}
          width={"100%"}
          alt={"Addian Management"}
        />
      </div>
      <ContactUsSection />
    </Box>
    </Container>
    </Fragment>
  );
};

export default SoloNutrition;
