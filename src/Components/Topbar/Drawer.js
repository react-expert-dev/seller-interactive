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
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { useHistory } from "react-router-dom";

//user import

import { amazonArr, whoAreWe, ourClients } from "../../constants";
import { Root_Routes } from "../../Services/Routes/APP";

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
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
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
      </List>
    </Fragment>
  );
};

export default Drawer;
