import React, { Fragment, useState } from "react";

//package import

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import { Phone as PhoneIcon } from "@mui/icons-material";

//user import

import { HideOnScroll } from "./HideOnScroll";
import { Root_Routes } from "../../Services/Routes/APP";

//constants

const amazonArr = [
  {
    id: 31,
    title: "Full Account Management",
    href: Root_Routes?.account_management,
    icon: "",
  },
  {
    id: 32,
    title: "Search Engine Optimization (SEO)",
    href: Root_Routes?.seo,
    icon: "",
  },
  {
    id: 33,
    title: "Sponsored Ads Management (PPC)",
    href: Root_Routes?.ppc,
    icon: "",
  },
  {
    id: 34,
    title: "Product Launch",
    href: Root_Routes?.product_launch,
    icon: "",
  },
  {
    id: 35,
    title: "Listing Optimization",
    href: Root_Routes?.listing_optimization,
    icon: "",
  },
  {
    id: 36,
    title: "Brand Protection & Assistance",
    href: Root_Routes?.protection_asistance,
    icon: "",
  },
  {
    id: 37,
    title: "Account Suspension Appeal & Reinstatement",
    href: Root_Routes?.appeal_reinstatement,
    icon: "",
  },
  {
    id: 38,
    title: "Reimbursement & Refund",
    href: Root_Routes?.reimbursement_refund,
    icon: "",
  },
  {
    id: 39,
    title: "FBA Wholesale Partnership Program",
    href: Root_Routes?.wholesale_partnership_program,
    icon: "",
  },
  {
    id: 40,
    title: "Amazon Demand-Side Platform Advertising",
    href: Root_Routes?.platform_advertising,
    icon: "",
  },
];

const ourClients = [
  {
    id: `client-1`,
    href: Root_Routes?.case_studies,
    title: "Case Studies",
  },
  {
    id: `client-2`,
    href: Root_Routes?.testimonials,
    title: "Client Testimonials",
  },
];

const whoAreWe = [
  {
    id: `client-1`,
    href: Root_Routes?.seller_interactive,
    title: "Why Seller Interactive?",
  },
  {
    id: `client-2`,
    href: Root_Routes?.ourstory,
    title: "Our Story",
  },
  {
    id: `client-2`,
    href: Root_Routes?.our_team,
    title: "Our Team",
  },
];

//component

export default function HideAppBar(props) {
  //states

  //hooks

  const theme = useTheme();

  //show what we Do

  return (
    <Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Container>
              <Box
                display={" flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box display={" flex"} alignItems={"center"}>
                  <Box width={150}>
                    <img
                      src={"/logo.jpg"}
                      width={"100%"}
                      alt={"Addian Management"}
                    />
                  </Box>
                  <Box className={"dropdown"}>
                    <Button padding={1} color={"inherit"} className={"dropbtn"}>
                      What We Do
                    </Button>

                    <Box
                      className="dropdown-content"
                      sx={{
                        backgroundColor: theme.palette.background.default,
                        padding: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          color={theme.palette.primary.main}
                          fontWeight={"bold"}
                        >
                          AMAZON SERVICES
                        </Typography>
                      </Box>
                      {amazonArr?.map((ama, index) => (
                        <Box
                          key={`${index}-amazon-services-${ama?.id}`}
                          sx={{
                            padding: 1,
                            color: theme.palette.common.black,
                            ":hover": {
                              backgroundColor: theme.palette.primary.main,
                              color: theme.palette.common.white,
                              borderRadius: 1,
                            },
                          }}
                        >
                          <Link
                            href={ama?.href}
                            underline={"none"}
                            color={"inherit"}
                            noWrap
                          >
                            {ama?.title}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box className={"dropdown"}>
                    <Button padding={1} color={"inherit"}>
                      Who We Are
                    </Button>
                    <Box
                      className="dropdown-content"
                      sx={{
                        backgroundColor: theme.palette.background.default,
                        padding: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          color={theme.palette.primary.main}
                          fontWeight={"bold"}
                        >
                          WHO ARE WE
                        </Typography>
                      </Box>
                      {whoAreWe?.map((ama, index) => (
                        <Box
                          key={`${index}-amazon-services-${ama?.id}`}
                          sx={{
                            padding: 1,
                            color: theme.palette.common.black,
                            ":hover": {
                              backgroundColor: theme.palette.primary.main,
                              color: theme.palette.common.white,
                              borderRadius: 1,
                            },
                          }}
                        >
                          <Link
                            href={ama?.href}
                            underline={"none"}
                            color={"inherit"}
                            noWrap
                          >
                            {ama?.title}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  {/* Our clients */}
                  <Box className={"dropdown"}>
                    <Button padding={1} color={"inherit"}>
                      Our Clients
                    </Button>
                    <Box
                      className="dropdown-content"
                      sx={{
                        backgroundColor: theme.palette.background.default,
                        padding: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          color={theme.palette.primary.main}
                          fontWeight={"bold"}
                          sx={{
                            textTransform: "uppercase",
                          }}
                        >
                          Our Clients
                        </Typography>
                      </Box>
                      {ourClients?.map((ama, index) => (
                        <Box
                          key={`${index}-amazon-services-${ama?.id}`}
                          sx={{
                            padding: 1,
                            color: theme.palette.common.black,
                            ":hover": {
                              backgroundColor: theme.palette.primary.main,
                              color: theme.palette.common.white,
                              borderRadius: 1,
                            },
                          }}
                        >
                          <Link
                            href={ama?.href}
                            underline={"none"}
                            color={"inherit"}
                            noWrap
                          >
                            {ama?.title}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box padding={1}>
                    <Link
                      color={"inherit"}
                      href={Root_Routes?.blog}
                      underline={"none"}
                    >
                      Blog
                    </Link>
                  </Box>
                </Box>
                <Box display={"flex"}>
                  <Box>
                    <Button
                      color={"inherit"}
                      component={"a"}
                      startIcon={<PhoneIcon />}
                    >
                      1-800-820-3746
                    </Button>
                  </Box>
                  <Box>
                    <Button color={"inherit"} variant={"outlined"}>
                      Contact us
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
}
