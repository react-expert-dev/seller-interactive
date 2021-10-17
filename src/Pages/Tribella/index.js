import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ContactUsSection from "../../Components/ContactUsSection";
const Tribella = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/gatorcable1.svg"}
            width={"100%"}
            alt={"Addian Management"}
          />
          <Typography
            variant="h1"
            sx={{ fontWeight: 800, position: "relative", top: -200 }}
          >
            TRIbella
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 800, position: "relative", top: -200 }}
          >
            Case Study.
          </Typography>
          <Typography
            variant="h5"
            sx={{ position: "relative", top: -150, lineHeight: 1.5 }}
          >
            TRIbella Beats Initial Roadblocks for Future Growth in Amazon Sales.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: -20 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Before Jenette Fong, account manager at SI (Seller Interactive), met
            Skip Li, TRIbella’s brand owner, he managed his seller account on
            his own. He took over his daughter’s role after she moved away.
            Overwhelmed by juggling several tasks and issues, he decided that
            the best way to move forward is to work with SI.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            In January 2020, TRIbella officially partnered with the SI team. To
            grow the TRIbella brand on Amazon, he obtained the follow-ing
            services:
          </Typography>
          <div style={{ display: "flex", marginTop: 25 }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Seller Account Management
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Ongoing Optimization
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
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
              Systematic Reimbursements
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
              Prep and Logistics
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Identifying Roadblocks
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        Skip’s ultimate goal is to grow his Amazon sales significantly. He and
        the SI team started their collaboration by first identifying and
        analyzing these critical issues:
      </Typography>
      <ul style={{ lineHeight: 1.5 }}>
        <li>
          There were two missing shipments worth over $8,000 that the brand
          couldn’t resolve with Amazon for a long time.
        </li>
        <li>
          New listings couldn’t be created because some of the UPCs on the
          Amazon platform were mapping to another Amazon seller’s ASINs instead
          of recognizing them as TRIbella products.
        </li>
        <li>
          Competing with numerous resellers made it difficult to convince buyers
          and Amazon Support that TRIbella’s products are authentic.
        </li>
      </ul>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Overcoming Challenges
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        After several brainstorming sessions and a comprehensive account audit,
        we identified crucial challenges. We came up with strategic solutions
        for each.
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: 5 }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/tribella1.png"}
            width={"25%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600, marginTop: 3 }}>
            Deal with Missing Shipments
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Assertive communication, proper documentation, and persistence are
            vital in persuading Amazon to either find the inventory or reimburse
            its cost. Six months prior to his engagement with SI, the client
            tried to create cases with Amazon but was unsuccessful in resolving
            the issue. We reconciled all prior shipments one by one to identify
            discrepancies. We opened several cases and showed invoices f rom the
            supplier/ warehouse to Amazon to prove that the brand shipped
            inventory to Amazon.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/tribella2.png"}
            width={"25%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600, paddingTop: 3 }}>
            Resolve UPC Issues
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            We needed to prove that the UPCs belong to the brand, so we can use
            them when creating the new listings. And that’s what SI did. We
            showed Amazon that TRIbella owns the UPCs by presenting
            manufacturing docu-ments, a catalog, and images showing UPC was
            printed and labeled on the actual product.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/tribella3.png"}
            width={"25%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600, paddingTop: 1,marginTop:2 }}>
            Beat the Competition
          </Typography>
          <Typography sx={{marginTop:1}}>
            Strict competition consisted of numerous resellers. To rise above
            them, we proved that TRIbella is genuine by registering it with
            Brand Registry and then creating a storef ront. We also protected
            the brand by getting rid of about 10+ hijackers and counterfeiters.
            We issued Cease and Desist letters to the resellers and as a result,
            we were able to regain the Buy Box.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
      The Winning Results
      </Typography>
      <Typography sx={{marginTop:3}}>
      In 3 months, we were able to achieve these favorable outcomes:
          </Typography>
          <ul style={{ lineHeight: 1.5 }}>
        <li>
        Issued reimbursement of two (2) missing shipments in January 2020 both valued at $4,000.00 each in March 2020. This sum can be used for ad campaigns or product reordering;
        </li>
        <li>
        Published Amazon listings with optimized and benefit-driven copy and images in February 2020;
        </li>
        <li>
        Approved brand registry for marketplace brand protection; and
        </li>
        <li>
        Removal of listing hijackers and counterfeiters that tarnished TRIbella’s reputation and hurt its sales.
        </li>
      </ul>
      <Typography sx={{marginTop:3, fontWeight:600}}>
      In 3 months, we were able to achieve these favorable outcomes:
          </Typography>
          <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          style={{ borderRadius: "2%" }}
          src={"/tribella4.png"}
          width={"80%"}
          alt={"Addian Management"}
        />
      </div>
      <ContactUsSection />
    </Box>
  );
};

export default Tribella;
