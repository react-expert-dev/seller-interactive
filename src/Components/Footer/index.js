import React, { Fragment } from "react";

//package import

import { Container, Box, Grid, Typography, Link } from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";

//user import

import Logo from "../../SVG/Logo_2";
import { Root_Routes} from '../../Services/Routes/APP/index'

//constants

const amazonArr = [
  {
    id: 1,
    title: "Full Account Management",
    link: Root_Routes?.account_management,
  },
  {
    id: 2,
    title: "Search Engine Optimization (SEO)",
    link: Root_Routes?.seo,
  },
  {
    id: 3,
    title: "Sponsored Ads Management (PPC)",
    link: Root_Routes?.ppc,
  },
  {
    id: 4,
    title: "Product Launch",
    link: Root_Routes?.product_launch,
  },
  {
    id: 5,
    title: "Listing Optimization",
    link: Root_Routes?.listing_optimization,
  },
  {
    id: 6,
    title: "Brand Protection & Assistance",
    link: Root_Routes?.protection_asistance,
  },
  {
    id: 7,
    title: "Account Suspension Appeal & Reinstatement",
    link: Root_Routes?.appeal_reinstatement,
  },
  {
    id: 8,
    title: "Reimbursement & Refund",
    link: Root_Routes?.reimbursement_refund,
  },
  {
    id: 9,
    title: "FBA Wholesale Partnership Program",
    link: Root_Routes?.wholesale_partnership_program,
  },
  {
    id: 10,
    title: "Amazon Demand-Side Platform Advertising",
    link: Root_Routes?.reimbursement_refund,
  },
];

const companyArr = [
  {
    id: 11,
    title: "Why Seller Interactive?",
    link: Root_Routes?.seller_interactive,
  },
  {
    id: 12,
    title: "Our Story",
    link: Root_Routes?.ourstory,
  },
  {
    id: 13,
    title: "Our Team",
    link: Root_Routes?.our_team,
  },
];

const resourcesArr = [
  {
    id: 21,
    title: "Testimonials",
    link:  Root_Routes?.testimonials,
  },
  {
    id: 22,
    title: "Blog",
    link:  Root_Routes?.blog,
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
            {/* <Box>Madian Management</Box> */}
            <Box><Logo width={160} height={80} /></Box>
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
