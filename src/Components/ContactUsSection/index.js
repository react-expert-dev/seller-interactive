import React from "react";
import { Box, Grid, Typography,OutlinedInput,Button } from "@mui/material";
const ContactUsSection = () => {
  return (
    <Box>
     <Typography variant="h3" sx={{ fontWeight: 800, marginTop: 10, textAlign:"center" }}>
      Want to be another success story?
      </Typography>
      <Grid container spacing={1} sx={{ marginBottom: 10 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{
                marginTop: 5,
                fontWeight: 800,
              }}
            >
              Contact Us.
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              Let us get to know you better.
            </Typography>{" "}
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              sx={{ marginTop: -1 }}
            >
              Book a free Amazon Seller account audit with our consultants.
            </Typography>{" "}
            <Typography variant="h6" gutterBottom component="div" sx={{marginTop:3}}>
              During your audit our consultants will:
            </Typography>
            <ul style={{ lineHeight: 1.5 }}>
              <li>Discuss ways we can meet your business goals</li>
              <li>Perform an Amazon brand and competitor analysis</li>
              <li>Show how our expertise can help you kickstart your sales</li>
            </ul>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{
              marginTop: 8,
            }}
          >
            <Typography variant="h6" gutterBottom component="div">
              Email *
            </Typography>
            <OutlinedInput placeholder="Enter email" sx={{ width: "100%" }} />
            <Button
              variant="contained"
              sx={{
                marginTop: 3,
              }}
            >
              Get in touch
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
    </Box>
  );
};

export default ContactUsSection;
