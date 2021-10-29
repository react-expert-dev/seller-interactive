import React, {Fragment} from "react";
import { Container } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ContactUsSection from "../../Components/ContactUsSection";
import "./style.css"
const WokenCoffee = () => {
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
          <Typography variant="h1" sx={{ position: "relative", top: -200 }}>
            Wokken Coffee
          </Typography>
          <Typography variant="h2" sx={{ position: "relative", top: -200 }}>
            Case Study.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}></Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: -20 }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h5" sx={{ lineHeight: 1.5 }}>
            How Woken Climbed 10,000 steps up Amazon’s Search Ranking through
            Seller Interactive’s Seller Effective Account Management.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="subtitle1"
           className="howWeHelpedDiv"
          >
            HOW WE HELPED
          </Typography>
          <Typography
            variant="h4"
            className="salesIncreament"
           
          >
            INCREASED SALES FROM $12K TO $14K IN JUST ONE MONTH
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Woken is a company run by a one-person team. As if that’s not hard
            enough, Amanda Harari, owner of Woken, also runs four businesses on
            the side. To increase sales and further grow the business, Woken
            needed an external service provider to manage their entire Amazon
            account, including handling customers’ enquiries and complaints, and
            looking into reconcili-ation when Amazon charges incorrectly. Enter
            Seller Interactive (SI).
          </Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Woken has been operating for a year and a half with only one
            employee. The rest of the services like graphic designer, social
            media manager, and website developers have been outsourced. And in
            early June 2020, Woken decided to entrust their Amazon account to
            SI.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            From June to July 2020, the follow-ing are the services that SI
            rendered to Woken for its 7 ASINs:
          </Typography>
          <div style={{ display: "flex", marginTop: 25 }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ paddingRight: 1 }}>
              {" "}
              Listing
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Optimization
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ paddingRight: 1 }}>
              {" "}
              Customer
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Service
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ paddingRight: 1 }}>
              {" "}
              Email Sequence
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Set up and Management
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ paddingRight: 1 }}>
              {" "}
              Walmart Marketplace
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Profile Setup
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ paddingRight: 1 }}>
              {" "}
              Troubleshooting
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ paddingRight: 1 }}>
              {" "}
              Account
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Management
            </Typography>
          </div>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            After working together for two months, Woken took the initiative in
            letting Seller Interactive take over their PPC Advertising
            management to further escalate the growth of the business.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Conquering Roadblocks
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Although visible results were delivered after only a month, the
            behind-the-scenes was definitely not a smooth ride. First, Woken
            sources its products from Italy. This leaves them with little to no
            control when it comes to managing the inventory level and estimating
            time it takes to replenish the stocks. The delivery on the
            creatives’ side also took its time due to the unexpected volume of
            needed revisions.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, marginTop: 3 }}
          >
            Putting these roadblocks aside, SI understands that waiting time is
            wasted time. This is why SI took the initiative to prioritize other
            issues while waiting for the deliverables of other external service
            providers.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, marginTop: 3 }}
          >
            By working closely with Woken, SI was able to accomplish the
            following tasks:
          </Typography>
          <div style={{ paddingLeft: 20, marginTop: 15 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              1. Maintain Amazon account’s health by promptly responding to
              queries, complaints, and negative reviews.
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              2. Troubleshot all issues including a mistaken expired inventory
              issue and missing revenue issue.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          style={{ borderRadius: "2%" }}
          src={"/wokencoffee1.png"}
          width={"60%"}
          alt={"Addian Management"}
        />
      </div>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Conquering Roadblocks
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            SI worked closely with the client herself to get the necessary
            products assets and information. This was to make sure that
            everything that would be published is factual, accurate, and on
            brand. Even though the client gave SI the full liberty to make
            Amazon-related decisions for the business, SI still made it a point
            to promptly notify the client about updates. The client was also
            involved in the process by soliciting inputs to further improve
            sales and brand awareness.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 3, fontWeight: 600 }}
          >
            To maintain a healthy Amazon seller account, SI made sure to perform
            the following daily:
          </Typography>
          <ul style={{ lineHeight: 2, fontWeight: 600 }}>
            <li>Ensure that all account health problems are addressed</li>
            <li>
              Check the account’s buyer messages, voices of customers, and all
              of its listings daily
            </li>
            <li>
              Respond to any new messages and reviews as soon as it is posted
            </li>
            <li>Followed up with open cases daily</li>
            <li>
              Requested an update when Amazon failed to respond within their
              12-hour threshold
            </li>
            <li>
              Make sure Amazon is not overcharging or mistakenly charging the
              client
            </li>
          </ul>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" sx={{ marginTop: 4, fontWeight: 600 }}>
        Constant consultations, progress reports, and successful issue
        resolutions kept the client updated about what’s happening in her
        business, which led to the client appreciate the potentials of her
        business.
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Conquering Roadblocks
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Although SI’s services started on June 4, the listings were first
            optimized on July 21. However, listing images and Enhanced Brand
            Content were prepared while waiting for the copies to be approved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            In that short amount of time, the total sales increased 17% ($12k to
            $14k) from June to July. The overall PPC sales also increased from
            $1.8K to $2.4K, while the ASIN rankings went up by 10,000 on
            average.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          style={{ borderRadius: "2%" }}
          src={"/wokencoffee2.png"}
          width={"100%"}
          alt={"Addian Management"}
        />
      </div>
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/wokencoffee3.png"}
            width={"80%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/wokencoffee4.png"}
            width={"80%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        After improving keyword ranking on one product, the number of Sessions
        increased by 117% from the previous month. In addition, the number of
        Page Views had a 300% increase from the previous month--PPC Advertising
        and Listing Optimizations are the key contributing factors.
      </Typography>
      <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
        SI closely monitors each listing, and provides proactive customer
        service. This resulted in an increase on the Buy Box Percentage. In one
        month, Woken's Buy Box Percentage has increased from 80% to a stable
        98%. Lastly, the conversion rate gradually increased by 3.2%.
      </Typography>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <img
          style={{ borderRadius: "2%" }}
          src={"/wokencoffee5.png"}
          width={"80%"}
          alt={"Addian Management"}
        />
      </div>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Conquering Roadblocks
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            SI was able to achieve a dramatic increase in sales and visibility
            over a short period of time because of its relentless focus and
            systematic way of doing things. SI does not stay still and wait for
            external parties to provide. SI actively finds solutions & addresses
            issues to make use of the waiting time.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="subtitle1" sx={{ marginTop: 3, fontWeight:600 }}>
            While all the bustling is happening, SI does not forget to keep the
            client updated on progress in terms of timelines and deliverables.
            SI believes that transparency & communication is the key to a
            successful business partnership.
          </Typography>
        </Grid>
      </Grid>
      <ContactUsSection />
    </Box>
    </Container>
    </Fragment>
  );
};

export default WokenCoffee;
