import React from "react";
import { Button, Box, Grid, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
const GatorCable = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
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
            Gator Cable
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
            How Gator Cable boosted their Amazon sales via Seller Interactive's
            strategic product management.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/gatorcable1.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography>
            When Mohamed Aden, account manager at Seller Interactive, met with
            Cesar Wong, Director at Gator Cable, they discussed the best ways to
            boost sales on the most prominent online marketplace, Amazon. SI
            officially handled the product management of Gator Cable, starting
            in October 2019. The services covered are:
          </Typography>
          <div style={{ display: "flex", marginTop: 25 }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Fixing duplicate listings
            </Typography>
            <Typography variant="subtitle1" sx={{ paddingLeft: 1 }}>
              {" "}
              on the account
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Deleting any listings
            </Typography>
            <Typography variant="subtitle1" sx={{ paddingLeft: 1 }}>
              {" "}
              with potential trademark issues
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Branding all featured
            </Typography>
            <Typography variant="subtitle1" sx={{ paddingLeft: 1 }}>
              {" "}
              products as Gator Cable
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <DoubleArrowIcon style={{ paddingLeft: 20, paddingRight: 10 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Linking the brand store
            </Typography>
            <Typography variant="subtitle1" sx={{ paddingLeft: 1 }}>
              {" "}
              to the brand name
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography>
            This was the first time that Gator Cable has ever collaborated with
            an independent marketing firm. Although the company has been selling
            on eBay for quite some time now, it has only recently entered
            Amazon.
          </Typography>
          <Typography sx={{ marginTop: 5 }}>
            The listings of Gator Cable on Amazon were scattered and
            disorganized. This issue resulted in minimal traffic, accounting for
            less than 10% of their revenue on eBay. Since Amazon is a much
            bigger marketplace with more opportunities for expansion, SI had to
            take over the rebuilding and management of the entire account.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10 }}>
        Overcoming Challenges
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%", marginTop: 50 }}
            src={"/gatorcable2.svg"}
            width={"25%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ marginTop: 2 }}>
            The SI team worked, along with the in-house team of Gator Cable, to
            obtain accurate product information, i.e., photos, UPCs, and newer
            models of the products. This way, the information on Amazon and the
            actual product would not conflict. SI worked closely with Cesar and
            his in-house team.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%", marginTop: 50 }}
            src={"/gatorcable3.svg"}
            width={"25%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ marginTop: 2 }}>
            After SI had finalized the entire product list and built a new
            inventory sheet, Cesar confirmed it, so that SI could delete the
            duplicates and unnecessary products. Overall, the SI team has
            removed 30-35 listings, which were duplicates, older versions, and
            unoptimized.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%", marginTop: 50 }}
            src={"/gatorcable4.svg"}
            width={"25%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ marginTop: 2 }}>
            During this time, Cesar and his team were preoccupied with other
            matters. This situation made it hard for SI to get his feedback in
            the soonest possible time. To overcome this roadblock, the SI team
            decided to prioritize other issues, such as fixing the brand name of
            the products by deleting and relisting each product.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GatorCable;
