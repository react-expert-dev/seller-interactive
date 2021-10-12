import React from "react";
import { Button, Box, Grid, Typography } from "@mui/material";
const SellerInteractives = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Why Seller Interactive?
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            Our portfolio consists of clients at different stages of the
            business cycle: launch, growth, shakeout, maturity & decline. Our
            services add value to your business no matter what phase you are at
            in the business cycle.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: 6,
            }}
          >
            Talk to us
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive1.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Typography
        variant="h2"
        sx={{ fontWeight: 800, textAlign: "center", marginTop: 6 }}
      >
        Our Process .
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: 5 }}>
        <Grid item xs={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive2.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600 }}>1. Consultation</Typography>
          <Typography>
            Let’s get to know each other. Once we find out about your situation,
            needs and wants, we will give you a proposal outlining what we can
            do for you and the costs involved in working with us. We will work
            with you only if we can truly increase your bottom line profits.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive3.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600 , paddingTop:3}}>2. Optimization</Typography>
          <Typography>
            Once you decide that it's best to work with us to leverage on our
            extensive expertise and experience so that you can focus on growing
            your brand and business. We will give you the best shot of
            succeeding right from the very beginning.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive4.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600,paddingTop:1 }}>3. Evolution</Typography>
          <Typography>
            Getting ahead is not enough. Staying ahead ia everything. Change is
            inevitable and it comes with new challenges and opportunities.
            Having a team of Amazon experts can mean the difference between
            success and failure.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SellerInteractives;
