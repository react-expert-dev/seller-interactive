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
  Hidden,
  IconButton,
  Drawer,
} from "@mui/material";
import { Phone as PhoneIcon, Menu as MenuIcon } from "@mui/icons-material";

//user import

import { HideOnScroll } from "./HideOnScroll";
import { Root_Routes } from "../../Services/Routes/APP";
import { amazonArr, whoAreWe, ourClients } from "../../constants";
import ListingDrawer from "./Drawer";
import Logo from "../../SVG/Logo_2";

//constants

//component

export default function HideAppBar(props) {
  //states

  const [open, setOpen] = useState(false);

  //hooks

  const theme = useTheme();

  const handleDrawer = () => {
    setOpen(!open);
  };

  //show what we Do

  return (
    <Fragment>
      <Hidden mdDown>
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
                    <Box width={160} component={"a"} href={Root_Routes?.root}>
                      {/* <img
                        src={"/logo.jpg"}
                        width={"100%"}
                        alt={"Addian Management"}
                      /> */}
                      <Logo width={160} height={80} />
                    </Box>
                    <Box className={"dropdown"}>
                      <Button
                        padding={1}
                        color={"inherit"}
                        className={"dropbtn"}
                      >
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
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                              noWrap
                            >
                              <Box component={"span"} mr={2}>
                                {ama?.icon}
                              </Box>
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
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                              noWrap
                            >
                              <Box component={"span"} mr={2}>
                                {ama?.icon}
                              </Box>
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
                        sx={{
                          textTransform: "uppercase",
                        }}
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
                      <Button
                        color={"inherit"}
                        variant={"outlined"}
                        href={Root_Routes?.contact_us}
                      >
                        Contact us
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Hidden>
      <Hidden mdUp>
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
                    <Box width={160}>
                      <Logo width={160} height={80} />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      color: theme.palette.common.white,
                    }}
                  >
                    <IconButton onClick={handleDrawer}>
                      <MenuIcon sx={{ color: theme.palette.common.white }} />
                    </IconButton>
                  </Box>
                  <Drawer
                    anchor={"right"}
                    open={open}
                    onClose={handleDrawer}
                    sx={{
                      width: 320,
                    }}
                    variant={"temporary"}
                  >
                    <Box width={320}>
                      <ListingDrawer handleDrawer={handleDrawer} />
                    </Box>
                  </Drawer>
                </Box>
              </Container>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Hidden>
    </Fragment>
  );
}
