import React, {Fragment} from "react";
import { Container } from "@mui/material";
import { Button, Box, Grid, Typography } from "@mui/material";
import { Root_Routes } from "../../Services/Routes/APP";
import { useHistory } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OurPartners from "../../Components/OurPartners";
import ThrivingAmazon from "../../Components/ThrivingAmazon";
const SellerInteractives = () => {
  const history = useHistory();
  const clickHandler = (href) => {
    history.push(href);   
  };
  return (
    <Fragment>
      <Container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
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
            onClick={() => clickHandler(Root_Routes?.contact_us)}
            sx={{
              marginTop: 6,
            }}
          >
            Talk to us
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
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
        <Grid item xs={12} sm={12} md={4} lg={4}>
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
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive3.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600, paddingTop: 3 }}>
            2. Optimization
          </Typography>
          <Typography>
            Once you decide that it's best to work with us to leverage on our
            extensive expertise and experience so that you can focus on growing
            your brand and business. We will give you the best shot of
            succeeding right from the very beginning.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive4.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography sx={{ fontWeight: 600, paddingTop: 1 }}>
            3. Evolution
          </Typography>
          <Typography>
            Getting ahead is not enough. Staying ahead ia everything. Change is
            inevitable and it comes with new challenges and opportunities.
            Having a team of Amazon experts can mean the difference between
            success and failure.
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, textAlign: "center", marginTop: 10 }}
      >
        Your success is our success.
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive9.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
            Be on top of Amazon’s ever-changing landscape
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            Amazon is always rolling out updates on their algorithm and Terms of
            Services. Therefore, staying on top of these changes is a must. Good
            thing, you can always count on our expertise in keeping your brand
            always up-to-date. We keep our fingers on Amazon’s pulse by spending
            hours combing newsletters, exclusive forums, and elite groups. Our
            experience in growing 7-figure brands in the marketplace has made us
            highly proficient in designing customized marketing and brand
            management strategies that work.
          </Typography>
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => clickHandler(Root_Routes?.contact_us)}
            sx={{
              marginTop: 4,
              border: "none",
            }}
          >
            Talk to us
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive5.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 8 }}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive6.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive9.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
            Be on top of Amazon’s ever-changing landscape
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            Amazon is always rolling out updates on their algorithm and Terms of
            Services. Therefore, staying on top of these changes is a must. Good
            thing, you can always count on our expertise in keeping your brand
            always up-to-date. We keep our fingers on Amazon’s pulse by spending
            hours combing newsletters, exclusive forums, and elite groups. Our
            experience in growing 7-figure brands in the marketplace has made us
            highly proficient in designing customized marketing and brand
            management
          </Typography>
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => clickHandler(Root_Routes?.contact_us)}
            sx={{
              marginTop: 4,
              border: "none",
            }}
          >
            Talk to us
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 8 }}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive9.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
          Always provide maximum customer satisfaction
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            Just like Amazon, our team of professionals obsesses over
            continuously improving the customers’ experience. That is why we
            always put their needs first. With this, we take charge of all your
            inbound and outbound customer service interactions. We respond to
            your messages and product reviews on time. Also, we create an
            automated follow-up messaging sequence. In setting up this
            customized, effective method, we boost your opportunity to receive
            positive reviews while mitigating the probability of dealing with
            negative feedback.
          </Typography>
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => clickHandler(Root_Routes?.contact_us)}
            sx={{
              marginTop: 4,
              border: "none",
            }}
          >
            Talk to us
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive7.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 8 }}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive8.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/sellerinteractive9.svg"}
            width={"13%"}
            alt={"Addian Management"}
          />
          <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3 }}>
            Overcome attacks and unexpected obstacles
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            Whether it is negative reviews, listing suspensions, or disapproved
            changes in your price or any part of your listing, obstacles hamper
            operations. Deal with them the right way with our expertise. We got
            full-time staffers whose experience as former professionals of
            Amazon’s Seller Support Team has familiarized them with the ins and
            outs of the marketplace. Their mastery plus the professionalism and
            dedication of the rest of our team guarantee effective resolutions
            of whatever issues will come your way.
          </Typography>
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => clickHandler(Root_Routes?.contact_us)}
            sx={{
              marginTop: 4,
              border: "none",
            }}
          >
            Talk to us
          </Button>
        </Grid>
      </Grid>
      <OurPartners />
      <ThrivingAmazon />
    </Box>
    </Container>
    </Fragment>
  );
};

export default SellerInteractives;
