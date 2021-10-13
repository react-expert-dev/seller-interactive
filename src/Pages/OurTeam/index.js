import React from "react";
import { Button, Box, Grid, Typography } from "@mui/material";
const ourTeamMembers = [
  {
    id: `success-story-1`,
    url: "/teammember1.png",
    imgText: "Addian Management",
    memberName: "Nicasio Co III",
    memberDesignation:"Founder",
  },
  {
    id: `success-story-2`,
    url: "/teammember2.png",
    imgText: "Hair Brust",
    memberName: "Jayce Broda",
    memberDesignation:"Managing Director",
  },
  {
    id: `success-story-3`,
    url: "/teammember3.png",
    imgText: "Hair Brust",
    memberName: "Ken Zhou",
    memberDesignation:"Director of Operations",
  },
  {
    id: `success-story-4`,
    url: "/teammember4.jpeg",
    imgText: "Hair Brust",
    memberName: "Felicia Liu",
    memberDesignation:"Head of Talent",
  },
  {
    id: `success-story-4`,
    url: "/teammember5.png",
    imgText: "Hair Brust",
    memberName: "Stefani Chhor",
    memberDesignation:"Director of Culture",
  },
  {
    id: `success-story-4`,
    url: "/teammember6.png",
    imgText: "Hair Brust",
    memberName: "Michael Pignatelli",
    memberDesignation:"Finance and Special Projects Analyst",
  },
  {
    id: `success-story-4`,
    url: "/teammember7.jpeg",
    imgText: "Hair Brust",
    memberName: "Kevin Wong",
    memberDesignation:"Client Strategist",
  },
  {
    id: `success-story-4`,
    url: "/teammember8.png",
    imgText: "Hair Brust",
    memberName: "Thomas Davison",
    memberDesignation:"Lead Developer",
  },
  {
    id: `success-story-4`,
    url: "/teammember4.jpeg",
    imgText: "Hair Brust",
    memberName: "Aron Tolentino",
    memberDesignation:"Full Stack Developer",
  },
  {
    id: `success-story-4`,
    url: "/teammember10.png",
    imgText: "Hair Brust",
    memberName: "Pramod Bhat",
    memberDesignation:"FoLogistics Coordinator",
  },
  {
    id: `success-story-4`,
    url: "/teammember13.jpeg",
    imgText: "Hair Brust",
    memberName: "Jenette Fong",
    memberDesignation:"Operations Manager",
  },
  {
    id: `success-story-4`,
    url: "/teammember15.png",
    imgText: "Hair Brust",
    memberName: "Mohamed Aden",
    memberDesignation:"General Operations Manager",
  },
  {
    id: `success-story-4`,
    url: "/teammember13.jpeg",
    imgText: "Hair Brust",
    memberName: "Antonette Ho",
    memberDesignation:"Operations Manager",
  },
  {
    id: `success-story-4`,
    url: "/teammember14.png",
    imgText: "Hair Brust",
    memberName: "Celine Yang",
    memberDesignation:"Product Development and Sourcing Specialis",
  },
  {
    id: `success-story-4`,
    url: "/teammember15.png",
    imgText: "Hair Brust",
    memberName: "Tuan Nguyen",
    memberDesignation:"Paid Ads Specialis",
  },
  {
    id: `success-story-4`,
    url: "/teammember16.png",
    imgText: "Hair Brust",
    memberName: "Crystal Zhang",
    memberDesignation:"PPC专家/数据分析师",
  },
  {
    id: `success-story-4`,
    url: "/teammember10.png",
    imgText: "Hair Brust",
    memberName: "Karen Chen",
    memberDesignation:"PPC Specialist",
  },
  {
    id: `success-story-4`,
    url: "/teammember16.png",
    imgText: "Hair Brust",
    memberName: "Marco Chung",
    memberDesignation:"Operations Team Lead",
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
            <img width={"100%"} src={sucess?.url} alt={sucess?.imgText} style={{ borderRadius: "50%" }} />
            <Typography variant="h6"sx={{textAlign:"center",fontWeight:600, marginTop:2}} >{sucess?.memberName}</Typography>
            <Typography variant="subtitle1"sx={{textAlign:"center"}} >{sucess?.memberDesignation}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{marginTop:5}}>
        <Grid item xs={4}></Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            variant="subtitle1"
            gutterBottom
            component="div"
            sx={{
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Our Partners
          </Typography>{" "}
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <img
            src={"/ourstory3.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={2} sx={{ marginTop: 5 }}>
          <img
            src={"/ourstory4.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={2} sx={{ marginTop: 4 }}>
          <img
            src={"/ourstory5.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={2}>
          <img
            src={"/ourstory6.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={2} sx={{ marginTop: 1 }}>
          <img
            src={"/ourstory7.png"}
            width={"100%"}
            alt={"Addian Management"}
          />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
};

export default OurTeam;
