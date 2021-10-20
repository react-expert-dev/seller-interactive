import React from "react";
import { Typography,} from "@mui/material";
const LatestPosts = ({data}) => {
  return (
      <>
    <div className="latestPostDiv">
                <img
                  className="postImage"
                  style={{ borderRadius: "2%", textAlign: "center" }}
                  src={data.url}
                  width={"90%"}
                  alt={"Addian Management"}
                />
                <Typography
                  sx={{ fontWeight: 600, marginTop: 1 }}
                  className="postDate"
                >
                  {data.postdate}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, marginTop: 1 }}
                  className="postTitle"
                >
                  {data.posttitle}
                </Typography>
                <Typography sx={{ marginTop: 1 }} className="postContent">
                  {data.postcontent}
                </Typography>
              </div>
</>
  )
};

export default LatestPosts;
