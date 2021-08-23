import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  Menu,
  Home,
  MenuBook,
  Speaker,
  People,
  ContactMail,
} from "@material-ui/icons";
import fries from "../fries.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuStyle: {
    width: 250,
    background: "black",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "white",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <MenuBook />,
    listText: "Bio",
  },
  {
    listIcon: <Speaker />,
    listText: "Reels",
  },
  {
    listIcon: <People />,
    listText: "Testimonials",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
  },
];

const Appbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuStyle}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={fries} alt="French Fries" />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu style={{ color: "white" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "white" }}>
              Matt Coburn
            </Typography>
            <MobileRightMenuSlider
              anchor="left"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Appbar;
