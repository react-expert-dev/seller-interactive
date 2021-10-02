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

//component

export default function HideAppBar(props) {
  //states

  const [whatWe, setWhatWe] = useState(false);

  //hooks

  const theme = useTheme();

  //show what we Do

  const whatWeHandler = () => {
    setWhatWe(!whatWe);
  };

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
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <Button
                      padding={1}
                      color={"inherit"}
                      onMouseEnter={whatWeHandler}
                      onMouseLeave={whatWeHandler}
                    >
                      What We Do
                    </Button>

                    <Box
                      sx={{
                        position: "absolute",
                        display: whatWe ? "block" : "none",
                        zIndex: theme.zIndex.appBar + 1,
                        backgroundColor: theme.palette.background.paper,
                        padding: 2,
                      }}
                    >
                      <Box>
                        <Typography></Typography>
                      </Box>
                      <Box>
                        <Link underline={"none"}>Full Account Management</Link>
                      </Box>
                      <Box>
                        <Link underline={"none"}> Full Account Management</Link>
                      </Box>
                      <Box>
                        <Link underline={"none"}>Full Account Management</Link>
                      </Box>
                      <Box>
                        <Link underline={"none"}>Full Account Management</Link>
                      </Box>
                    </Box>
                  </Box>
                  <Button padding={1} color={"inherit"}>
                    Who We Are
                  </Button>
                  <Button padding={1} color={"inherit"}>
                    Our Clients
                  </Button>
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
