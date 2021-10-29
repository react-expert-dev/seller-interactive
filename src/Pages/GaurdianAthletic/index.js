import React, {Fragment} from "react";
import { Container } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ContactUsSection from "../../Components/ContactUsSection";
const GaurdianAthletic = () => {
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
          <Typography variant="h1" sx={{ position: "relative", top: -300 }}>
            Gaurdian Athletic
          </Typography>
          <Typography variant="h2" sx={{ position: "relative", top: -300 }}>
            Case Study.
          </Typography>
          <Typography
            variant="h5"
            sx={{ position: "relative", top: -250, lineHeight: 1.5 }}
          >
            How a Brand Conquered a Lost Shipment Reimbursement, Gated
            Categories, and Gated ASIN Approval
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: -33 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Seller Interactive Project Manager Jenette Fong and Account Manager
            Ericka Teoxon, together with their Team from Seller Interactive, met
            with their client. They discussed strategies to overcome the
            following challenges :
          </Typography>
          <div style={{ display: "flex", marginTop: 20 }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">
              How to get reimbursed for missing units
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">
              How to get approved for gated categories and gated listings
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">How to reinstate ASINs</Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">Full Account Management</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            In just two weeks, the SI Team successfully achieved the following :
          </Typography>
          <div style={{ display: "flex", marginTop: 20 }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">
              Lost shipment reimbursement
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">
              Reinstatement of ASINs incorrectly tagged as Hazmat
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">Gated ASIN approval</Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1">Gated category approval</Typography>
          </div>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Identifying the Root Causes
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        This brand, like many others, encountered a challenge that Amazon
        sellers are destined to face at some point in their FBA journey - a lost
        shipment and difficulty applying for gated categories and branded
        listings.
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        The brand created a shipment to send 70 units of a single ASIN. Their
        products were lost after the shipment was sent to one of the Amazon
        fulfillment centers. In this shipment, Amazon claimed to have only
        received 1 of 70 units shipped. These 69 missing units were valued at
        $3,289.92 in total.
      </Typography>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          style={{ borderRadius: "2%" }}
          src={"/gaurdian1.png"}
          width={"80%"}
          alt={"Addian Management"}
        />
      </div>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        In some cases, lost shipments are caused by carrier negligence or
        incorrect shipment details. The SI team needed to thoroughly assess the
        situation to develop an action plan. Seller Interactive contacted seller
        Support to report the issue.
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        After receiving a response, they figured out the problem. A discrepancy
        in weight declaration is what resulted in the lost shipment. The brand
        declared 910 lbs in their shipping plan; however, the carrier’s claimed
        weight was only 13 lbs. This detail was why Amazon’s Seller Support
        declined the SI team’s reimbursement request.
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        SI Team soon realized a problem in the brand's listing details. The
        weight declared for this ASIN was 13 lbs instead of 2.56 fl oz each.
        This prompted a review of the rest of the catalog listings. They were
        also found to have incorrect weight and dimensions.
      </Typography>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          style={{ borderRadius: "2%" }}
          src={"/gaurdian2.png"}
          width={"80%"}
          alt={"Addian Management"}
        />
      </div>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Conquering Challenges Head-On Through
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 2 }}>
        Multitasking and Relentless Follow-ups
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        Amazon declined the reimbursement request, category, and brand
        applications several times before resolving this issue. The SI Team was
        relentless in pushing for the lost shipment reimbursement, going the
        extra mile, and taking these steps :
      </Typography>
      <div style={{ display: "flex", marginTop: 20 }}>
        <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
        <Typography variant="subtitle1">
          Sending out an appeal with all the documents that Amazon Seller
          Support requested
        </Typography>
      </div>
      <div style={{ display: "flex" }}>
        <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
        <Typography variant="subtitle1">
          Providing photo evidence of the product and its actual weight
        </Typography>
      </div>
      <div style={{ display: "flex" }}>
        <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
        <Typography variant="subtitle1">
          Providing evidence that the brand shipped out the correct number of
          units as declared in the shipment and that there was a weight
          discrepancy
        </Typography>
      </div>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Hard-Earned Victory At-last
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        Seller Interactive proofed all the listings, and supporting evidence for
        the shipment was provided. In this case, 70 units weighing 2.0 FL OZ did
        not match what Amazon was expecting. This was promptly addressed. Within
        24-hours, the brand received great news - the 69 units that were
        misplaced were now fully reimbursed, amounting to $3,289.92.
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 5 }}>
        Providing evidence that the brand shipped out the correct number of
        units as declared in the shipment and that there was a weight
        discrepancy
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        Providing evidence that the brand shipped out the correct number of
        units as declared in the shipment and that there was a weight
        discrepancy
      </Typography>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          style={{ borderRadius: "2%" }}
          src={"/gaurdian3.png"}
          width={"80%"}
          alt={"Addian Management"}
        />
      </div>
      <ContactUsSection />
    </Box>
    </Container>
    </Fragment>
  );
};

export default GaurdianAthletic;
