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

//constants

const amazonArr = [
  {
    id: 31,
    title: "Full Account Management",
    icon: "",
  },
  {
    id: 32,
    title: "Search Engine Optimization (SEO)",
    icon: "",
  },
  {
    id: 33,
    title: "Sponsored Ads Management (PPC)",
    icon: "",
  },
  {
    id: 34,
    title: "Product Launch",
    icon: "",
  },
  {
    id: 35,
    title: "Listing Optimization",
    icon: "",
  },
  {
    id: 36,
    title: "Brand Protection & Assistance",
    icon: "",
  },
  {
    id: 37,
    title: "Account Suspension Appeal & Reinstatement",
    icon: "",
  },
  {
    id: 38,
    title: "Reimbursement & Refund",
    icon: "",
  },
  {
    id: 39,
    title: "FBA Wholesale Partnership Program",
    icon: "",
  },
  {
    id: 40,
    title: "Amazon Demand-Side Platform Advertising",
    icon: "",
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

                    <Box className="dropdown-content">
                      <Box>
                        <Typography>AMAZON SERVICES</Typography>
                      </Box>
                      {amazonArr?.map((ama, index) => (
                        <Box key={`${index}-amazon-services-${ama?.id}`}>
                          <Link href={"#"} underline={"none"}>
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
                    <Box className="dropdown-content">
                      <Box>
                        <Typography>AMAZON SERVICES</Typography>
                      </Box>
                      {amazonArr?.map((ama, index) => (
                        <Box key={`${index}-amazon-services-${ama?.id}`}>
                          <Link href={"#"} underline={"none"}>
                            {ama?.title}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box className={"dropdown"}>
                    <Button padding={1} color={"inherit"}>
                      Our Clients
                    </Button>
                    <Box className="dropdown-content">
                      <Box>
                        <Typography>AMAZON SERVICES</Typography>
                      </Box>
                      {amazonArr?.map((ama, index) => (
                        <Box key={`${index}-amazon-services-${ama?.id}`}>
                          <Link href={"#"} underline={"none"}>
                            {ama?.title}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box padding={1}>
                    <Link color={"inherit"} href={"/"} underline={"none"}>
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
