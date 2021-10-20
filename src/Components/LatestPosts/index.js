import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Grid, Typography, Box } from "@mui/material";
const LatestPosts = () => {
  return (
      <Box spacing={1}>
    <Grid container spacing={2} sx={{marginBottom:3}}>
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
      <div style={{ textAlign: "right", marginTop:70 }}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={8} lg={8}>
    </Grid>
    <Grid item xs={6} sm={6} md={3} lg={3}>
    <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600 }}
        >
          Explore our blog
        </Typography>
    </Grid>
    <Grid item xs={6} sm={6} md={1} lg={1}>
    <KeyboardArrowRightIcon style={{marginTop:2}}/>
    </Grid>
  </Grid>
        
        
      </div>
    </Grid>
  </Grid>
  <Grid container spacing={2} sx={{marginBottom:6}}>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <div className="latestPostDiv">
        <img
          className="postImage"
          style={{ borderRadius: "2%", textAlign: "center" }}
          src={"/amazon7.jpg"}
          width={"90%"}
          alt={"Addian Management"}
        />
        <Typography
          sx={{ fontWeight: 600, marginTop: 1 }}
          className="postDate"
        >
          OCTOBER 14, 2021
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginTop: 1 }}
          className="postTitle"
        >
          Amazon DSP Program: Why It's Worth Investing on It This 2021
        </Typography>
        <Typography sx={{ marginTop: 1 }} className="postContent">
          If you're already selling on Amazon, you know how tight the
          competition is. So it's only reasonable that you do everything you
          can to increase leverage against your competitors. This is one of
          the reasons why you should consider enrolling in the Amazon DSP
          Program. Learn more about what this advertising program is all
          about […]
        </Typography>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <div className="latestPostDiv">
        <img
          className="postImage"
          style={{ borderRadius: "2%", textAlign: "center" }}
          src={"/amazon5.jpg"}
          width={"90%"}
          alt={"Addian Management"}
        />
        <Typography
          sx={{ fontWeight: 600, marginTop: 1 }}
          className="postDate"
        >
          OCTOBER 13, 2021
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginTop: 1 }}
          className="postTitle"
        >
          Top 4 Mistakes New Sellers Make Without Amazon Management Services
        </Typography>
        <Typography sx={{ marginTop: 1 }} className="postContent">
          So you're planning on setting up a seller account to begin your
          eCommerce journey on Amazon. Congratulations! Amazon is the
          largest online marketplace, so this opportunity could lead you to
          a bright future. In 2019, Amazon produced 354 billion US Dollars
          annually from eCommerce sales. Today, Amazon continues to dominate
          the eCommerce business, with projected […]
        </Typography>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <div className="latestPostDiv">
        <img
          className="postImage"
          style={{ borderRadius: "2%", textAlign: "center" }}
          src={"/amazon6.jpg"}
          width={"90%"}
          alt={"Addian Management"}
        />
        <Typography
          sx={{ fontWeight: 600, marginTop: 1 }}
          className="postDate"
        >
          OCTOBER 12, 2021
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginTop: 1 }}
          className="postTitle"
        >
          How an Amazon FBA Account Manager Will Make Your Business
          Amazon-Compliant
        </Typography>
        <Typography sx={{ marginTop: 1 }} className="postContent">
          When you're selling on Amazon, you’re up against so many other
          sellers on the platform. This is why so many people decide to work
          with an Amazon FBA account manager. Aside from leveraging your
          advantage against all your other competitors, they provide
          guidance and in other areas of your business, including making
          your business Amazon […]
        </Typography>
      </div>
    </Grid>
  </Grid>
</Box>
  )
};

export default LatestPosts;
