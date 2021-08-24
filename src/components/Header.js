import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import fries from "../fries.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "black",
  },
  textContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.textContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={fries} alt="French Fries" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        Matt Coburn Sound
      </Typography>
    </Box>
  );
};

export default Header;
