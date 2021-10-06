import React from "react";
import { Grid, Typography, Box } from "@mui/material"
import { BorderAll } from "@mui/icons-material";
const CaseStudies = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={8}>
        <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{
              marginTop: 10,
              fontWeight:800,
            }}
          >
            Case Studies.
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
          Seller Interactive has helped clients increase sales through listing optimization, improved conversion rates, brand protection, design, and so much more.
          </Typography>{" "}
          <Typography variant="subtitle1" gutterBottom component="div">
          See our collection of success stories of how we support our clients through common Amazon challenges (account suspension, hijackers, low account health) and achieve brand success.
          </Typography>
        
        </Grid>
        <Grid item xs={12} md={4} lg={4} >
          
        </Grid>
        
      </Grid>
      <Grid container spacing={6} sx={{marginTop:3}}>
      <Grid item xs={4}>
<Box sx={{ border: 1, width:"100%", height:"100%", borderRadius:2}}>
 <img
 style={{padding:10, width:"75%",marginLeft:30, marginBottom:20, marginTop:20}}
            src={"/casestudy1.png"}
            alt={"Addian Management"}
          />
</Box> 
  </Grid>
  <Grid item xs={4}>
<Box sx={{ border: 1, width:"100%", height:"100%", borderRadius:2}}>
 <img
 style={{padding:10, width:"75%",marginLeft:30, marginBottom:20, marginTop:20}}
            src={"/casestudy1.png"}
            alt={"Addian Management"}
          />
</Box> 
  </Grid>
  <Grid item xs={4}>
<Box sx={{ border: 1, width:"100%", height:"100%", borderRadius:2}}>
 <img
 style={{padding:10, width:"75%",marginLeft:30, marginBottom:20, marginTop:20}}
            src={"/casestudy1.png"}
            alt={"Addian Management"}
          />
</Box> 
  </Grid>
  
</Grid>
<Grid container spacing={6} sx={{marginTop:3}}>
      <Grid item xs={4}>
<Box sx={{ border: 1, width:"100%", height:"100%", borderRadius:2}}>
 <img
 style={{padding:10, width:"75%",marginLeft:30, marginBottom:20, marginTop:20}}
            src={"/casestudy1.png"}
            alt={"Addian Management"}
          />
</Box> 
  </Grid>
  <Grid item xs={4}>
<Box sx={{ border: 1, width:"100%", height:"100%", borderRadius:2}}>
 <img
 style={{padding:10, width:"75%",marginLeft:30, marginBottom:20, marginTop:20}}
            src={"/casestudy1.png"}
            alt={"Addian Management"}
          />
</Box> 
  </Grid>
  <Grid item xs={4}>
<Box sx={{ border: 1, width:"100%", height:"100%", borderRadius:2}}>
 <img
 style={{padding:10, width:"75%",marginLeft:30, marginBottom:20, marginTop:20}}
            src={"/casestudy1.png"}
            alt={"Addian Management"}
          />
</Box> 
  </Grid>
  
</Grid>



<Grid container spacing={6} sx={{marginTop:3, marginBottom:5}}>
<Grid item xs={1}>
 
 </Grid>
      <Grid item xs={4}>
<Box sx={{ border: 1, width:"100%", height:"100%", borderRadius:2}}>
 <img
 style={{padding:10, width:"75%",marginLeft:30, marginBottom:20, marginTop:20}}
            src={"/casestudy1.png"}
            alt={"Addian Management"}
          />
</Box> 
  </Grid>
  <Grid item xs={2}>
 
 </Grid>
  <Grid item xs={4}>
<Box sx={{ border: 1, width:"100%", height:"100%", borderRadius:2}}>
 <img
 style={{padding:10, width:"75%",marginLeft:30, marginBottom:20, marginTop:20}}
            src={"/casestudy1.png"}
            alt={"Addian Management"}
          />
</Box> 
  </Grid>
  <Grid item xs={1}>
 
  </Grid>
  
</Grid>
    </Box>
  )
};

export default CaseStudies;
