import React from "react";
import { Button, Box, Grid, Typography } from "@mui/material";
const ourTeamMembers = [
  {
    id: `success-story-1`,
    url: "/teammember1.png",
    imgText: "Addian Management",
    cardtext: "Gator Cable",
  },
  {
    id: `success-story-2`,
    url: "/teammember2.png",
    imgText: "Hair Brust",
    cardtext: "Hair Burst",
  },
  {
    id: `success-story-3`,
    url: "/teammember3.png",
    imgText: "Hair Brust",
    cardtext: "Quench Co",
  },
  {
    id: `success-story-4`,
    url: "/teammember4.jpeg",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember5.png",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember6.png",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember7.jpeg",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember8.png",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember9.png",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember10.png",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember11.jpeg",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember12.jpeg",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember13.jpeg",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember14.png",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember15.png",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember16.png",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember17.png",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
  {
    id: `success-story-4`,
    url: "/teammember16.png",
    imgText: "Hair Brust",
    cardtext: "Solo Nutrition",
  },
];

const OurTeam = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Meet our team.
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            Reach out to us and we’ll tell you exactly how we can help you. Find
            out exactly how we can do things better, faster or differently to
            ultimately make you more bottom line profits. If you believe in
            win-win situations and you have good products, you are at the right
            place.
          </Typography>
          <Typography sx={{ marginTop: 3 }}>
            We’re a bunch of unique individuals with different strengths but the
            same passion for growth and performance. Together, we cover for each
            other’s weaknesses and blindspots to form an unstoppable team!
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
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            style={{ borderRadius: "2%" }}
            src={"/ourteam1.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, textAlign: "center", marginTop: 10 }}
      >
        The people behind the magic.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <img
            style={{ borderRadius: "50%" }}
            src={"/ourteam1.jpg"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={7}
        direction="row"
        justifyContent="center"
        sx={{ marginTop: 1 }}
      >
        {ourTeamMembers?.map((sucess, index) => (
          <Grid
            item
            xs={12}
            md={3}
            sm={12}
            lg={3}
            key={`${index}-success-story-${sucess?.id}`}
          >
            <img width={"100%"} src={sucess?.url} alt={sucess?.imgText} />
            <Typography variant="h5">Nicasio Co III</Typography>
            <Typography variant="title1">Founder</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurTeam;
