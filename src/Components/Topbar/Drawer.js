import React, { Fragment, useState } from "react";

//package import

import {
  Box,
  Button,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  useTheme,
  Collapse,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { Close, ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Phone as PhoneIcon } from "@mui/icons-material";
import { useHistory } from "react-router-dom";

//user import

import { amazonArr, whoAreWe, ourClients } from "../../constants";
import { Root_Routes } from "../../Services/Routes/APP";
import Logo from "../../SVG/Logo_2";

//component

const Drawer = ({ handleDrawer }) => {
  //hooks

  const theme = useTheme();
  const history = useHistory();

  //states

  const [amazon, setAmazon] = useState(false);
  const [weAre, setWeAre] = useState(false);

  const amazonHandler = () => {
    setAmazon(!amazon);
  };

  const weAreHandler = () => {
    setWeAre(!weAre);
  };

  const clickHandler = (href) => {
    history.push(href);
    handleDrawer();
  };

  //render

  return (
    <Fragment>
      <List>
        <Box display={"flex"} justifyContent={"space-between"} paddingX={2}>
          <Box>
            <Logo width={160} height={80} color={theme?.palette.common.black} />
          </Box>
          <Box>
            <IconButton onClick={handleDrawer}>
              <Close />
            </IconButton>
          </Box>
        </Box>
        <ListItemButton onClick={amazonHandler}>
          <ListItemText primary="What We Do" />
          {amazon ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={amazon} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Box sx={{ pl: 2 }}>
              <Typography
                color={theme.palette.primary.main}
                fontWeight={"bold"}
              >
                AMAZON SERVICES
              </Typography>
            </Box>
            {amazonArr?.map((ama, index) => (
              <ListItemButton
                key={`${index}-amazon-services-${ama?.id}`}
                sx={{ pl: 2 }}
                onClick={() => clickHandler(ama?.href)}
              >
                <ListItemIcon>{ama?.icon}</ListItemIcon>
                <ListItemText primary={ama?.title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton onClick={weAreHandler}>
          <ListItemText primary="Who We Are" />
          {weAre ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={weAre} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Box sx={{ pl: 2 }}>
              <Typography
                color={theme.palette.primary.main}
                fontWeight={"bold"}
                sx={{
                  textTransform: "uppercase",
                }}
              >
                Who We Are
              </Typography>
            </Box>
            {whoAreWe?.map((ama, index) => (
              <ListItemButton
                key={`${index}-amazon-services-${ama?.id}`}
                sx={{ pl: 2 }}
                onClick={() => clickHandler(ama?.href)}
              >
                <ListItemIcon>{ama?.icon}</ListItemIcon>
                <ListItemText primary={ama?.title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton onClick={() => clickHandler(Root_Routes?.case_studies)}>
          <ListItemText primary="Case Studies" />
        </ListItemButton>

        <ListItemButton onClick={() => clickHandler(Root_Routes?.testimonials)}>
          <ListItemText primary="Testimonials" />
        </ListItemButton>
        <ListItemButton onClick={() => clickHandler(Root_Routes?.blog)}>
          <ListItemText primary="Blog" />
        </ListItemButton>
        <Box padding={2}>
          <Button
            color={"inherit"}
            component={"a"}
            href={"tel:18008203746"}
            variant={"outlined"}
            fullWidth
            startIcon={<PhoneIcon />}
          >
            1-800-820-3746
          </Button>
        </Box>
        <Box padding={2}>
          <Button
            color={"primary"}
            variant={"contained"}
            href={Root_Routes?.contact_us}
            fullWidth
          >
            Contact us
          </Button>
        </Box>
      </List>
    </Fragment>
  );
};

export default Drawer;
