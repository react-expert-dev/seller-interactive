import React, {Fragment} from "react";
import { Container } from "@mui/material";
import { Root_Routes } from "../../Services/Routes/APP";
import { useHistory } from "react-router-dom";
import OurPartners from "../../Components/OurPartners";
import ThrivingAmazon from "../../Components/ThrivingAmazon";
//package import

import { Button, Grid, Typography, Box } from "@mui/material";

//component

const OurStory = () => {
  const history = useHistory();
  const clickHandler = (href) => {
    history.push(href);   
  };
  //render

  return (
    <Fragment>
      <Container>
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
         
        >
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{
              marginTop: 10,
              fontWeight:800,
            }}
          >
            Our Story.
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Born in Toronto, Seller Interactive has become the city’ s leading
            digital marketing agency in eCommerce intelligence, sales
            optimization, and marketplace management.{" "}
          </Typography>{" "}
          <Typography variant="subtitle1" gutterBottom component="div">
            We have sold in many different categories and stumbled upon hundreds
            of pitfalls and hardships of selling on Amazon.We have learned how
            to rank as quickly and cheaply as possible, how to get raving
            reviews that are 100 % compliant to Amazon’ s TOS, how to get
            listings back online as soon as possible when they get shut down due
            to competitor’ s tactics, how to truly craft the most optimized
            listing and pictures and how to get suspended accounts reinstated.
          </Typography>
          <Button
            variant="contained"
            onClick={() => clickHandler(Root_Routes?.contact_us)}
            sx={{
              marginTop: 5,
              borderRadius: 2,
            }}
          >
            Talk to us
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
         
        >
          <img
          style={{borderRadius:"2%"}}
            src={"/ourstory1.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{
              marginTop: 8,
              marginBottom: 5,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            We started by turning $2,500 into multiple 7-figure brands.
          </Typography>
          <img
          style={{borderRadius:"2%"}}
            src={"/ourstory2.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ marginTop: 8, fontWeight: 400 }}
          >
            Starting with a few thousand dollars in 2014, we have gone through
            all the mistakes possible in the world of Amazon ranging from
            account and listing suspensions to containers being turned away at
            the port. After countless episodes of ups and downs, we have emerged
            victorious – the combined annual revenues of our own brands have
            recently hit 8 figures.{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ marginTop: 3, fontWeight: 400 }}
          >
            We often get asked why we want to help others sell well on Amazon.
            Why not just keep selling more of our products?
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ marginTop: 3, fontWeight: 400 }}
          >
            We always respond the same way – Why not do both?
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ marginTop: 3, fontWeight: 400 }}
          >
            We continue to sell our own products..
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ marginTop: 3, fontWeight: 400 }}
          >
            But there are countless great products out there that can positively
            impact the masses if they are managed and marketed well on Amazon.
            There is a strong and growing need for authentic Amazon expertise
            and full Amazon account management. If we can repeatedly start and
            grow e-commerce brands on the Amazon platform and succeed, then
            there is no reason why we cannot help others do the same thing.
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{ marginTop: 3, fontWeight: 400 }}
          >
            Over the years, we have gained much experience and expertise and
            developed great teams and systems to be in a position to offer great
            value to others. It made perfect sense for us (it’s a win-win
            situation) to do the tasks that we are really good at – selling on
            Amazon well – in partnership with physical product brands that are
            not familiar or adept at selling on Amazon. If your products can do
            well outside Amazon, we guarantee it will do well in Amazon with our
            help!
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{
              marginTop: 3,
              fontWeight: 400,
            }}
          >
            We continue to sell our own products..If you enjoy sushi, it makes
            more sense to hire the best sushi chef in town to prepare your meal
            than for you to spend 10 000 hours mastering the art of preparing
            sushi. Amazon is a foreign jungle with its own rules and secrets –
            and it takes a lot of time, effort, resources and trial and error to
            navigate your way successfully alone. You need a guide – someone who
            has successfully done exactly what you are trying to achieve!
          </Typography>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
      <OurPartners />
      <ThrivingAmazon />
    </Box>
    </Container>
    </Fragment>
  );
};

export default OurStory;
