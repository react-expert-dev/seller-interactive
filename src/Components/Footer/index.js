import React, { Fragment } from "react";

//package import

import { Container, Box, Grid, Typography, Link } from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";

//constants

const amazonArr = [
  {
    id: 1,
    title: "Full Account Management",
    link: "/",
  },
  {
    id: 2,
    title: "Search Engine Optimization (SEO)",
    link: "/",
  },
  {
    id: 3,
    title: "Sponsored Ads Management (PPC)",
    link: "/",
  },
  {
    id: 4,
    title: "Product Launch",
    link: "/",
  },
  {
    id: 5,
    title: "Listing Optimization",
    link: "/",
  },
  {
    id: 6,
    title: "Brand Protection & Assistance",
    link: "/",
  },
  {
    id: 7,
    title: "Account Suspension Appeal & Reinstatement",
    link: "/",
  },
  {
    id: 8,
    title: "Reimbursement & Refund",
    link: "/",
  },
  {
    id: 9,
    title: "FBA Wholesale Partnership Program",
    link: "/",
  },
  {
    id: 10,
    title: "Amazon Demand-Side Platform Advertising",
    link: "/",
  },
];

const companyArr = [
  {
    id: 11,
    title: "Why Seller Interactive?",
    link: "/",
  },
  {
    id: 12,
    title: "Our Story",
    link: "/",
  },
  {
    id: 13,
    title: "Our Team",
    link: "/",
  },
];

const resourcesArr = [
  {
    id: 21,
    title: "Testimonials",
    link: "/",
  },
  {
    id: 22,
    title: "Blog",
    link: "/",
  },
];

const contactArr = [
  {
    id: 31,
    title: "hello@sellerinteractive.com",
    link: "mailto:hello@sellerinteractive.com",
  },
  {
    id: 32,
    title: "1-800-820-3746",
    link: "tel:18008203746",
  },
  {
    id: 33,
    title: "7676 Woodbine Ave # 2 Markham, ON, L3R 2N2 Canada",
    link: "https://goo.gl/maps/Hnn2GzRBLVmU6k4fA",
  },
  {
    id: 34,
    title: "228 Park Ave S #82849 New York, NY 10003 United States",
    link: "https://goo.gl/maps/Hnn2GzRBLVmU6k4fA",
  },
];

//component

const Footer = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Box margin={2}>
            <Box>Madian Management</Box>
            <Box paddingY={2}>
              <Typography variant={"body1"} fontWeight={"bold"}>
                Get ahead on Amazon
              </Typography>
            </Box>
            <Box display={"flex"} paddingY={2}>
              <Box>
                <Link href={"https://facebook.com"} target={"_blank"}>
                  <FacebookIcon
                    sx={{
                      width: 28,
                      height: 28,
                    }}
                  />
                </Link>
              </Box>
              <Box>
                <Link href={"https://youtube.com"} target={"_blank"}>
                  <YouTubeIcon
                    sx={{
                      width: 28,
                      height: 28,
                    }}
                    color={"error"}
                  />
                </Link>
              </Box>
              <Box>
                <Link href={"https://linkedin.com"} target={"_blank"}>
                  <LinkedInIcon
                    sx={{
                      width: 28,
                      height: 28,
                    }}
                  />
                </Link>
              </Box>
            </Box>
            <Box>
              <Typography>
                &copy; {new Date().getFullYear()} Madian Management
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box margin={2}>
            <Box>
              <Typography
                fontWeight={"bold"}
                variant={"caption"}
                color={"gray"}
                gutterBottom
              >
                AMAZON SERVICES
              </Typography>
              <Box>
                {amazonArr?.map((e, index) => (
                  <Box key={`${index}-amazon-${e?.id}`} paddingY={1}>
                    <Link
                      href={e?.link}
                      target={"_blank"}
                      underline={"none"}
                      color={"black"}
                    >
                      {e?.title}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box margin={2}>
            <Box>
              <Typography
                fontWeight={"bold"}
                variant={"caption"}
                color={"gray"}
                gutterBottom
              >
                COMPANY
              </Typography>
              <Box>
                {companyArr?.map((e, index) => (
                  <Box key={`${index}-amazon-${e?.id}`} paddingY={1}>
                    <Link
                      href={e?.link}
                      target={"_blank"}
                      underline={"none"}
                      color={"black"}
                    >
                      {e?.title}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box margin={2}>
            <Box>
              <Typography
                fontWeight={"bold"}
                variant={"caption"}
                color={"gray"}
                gutterBottom
              >
                RESOURCES
              </Typography>
              <Box>
                {resourcesArr?.map((e, index) => (
                  <Box key={`${index}-amazon-${e?.id}`} paddingY={1}>
                    <Link
                      href={e?.link}
                      target={"_blank"}
                      underline={"none"}
                      color={"black"}
                    >
                      {e?.title}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box margin={2}>
            <Box>
              <Typography
                fontWeight={"bold"}
                variant={"caption"}
                color={"gray"}
                gutterBottom
              >
                CONTACT US
              </Typography>
              <Box>
                {contactArr?.map((e, index) => (
                  <Box key={`${index}-amazon-${e?.id}`} paddingY={1}>
                    <Link
                      href={e?.link}
                      target={"_blank"}
                      underline={"none"}
                      color={"black"}
                    >
                      {e?.title}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
