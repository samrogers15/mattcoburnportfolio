import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import fries from '../fries.png';

const Header = () => {
  return (
    <Box>
      <Avatar src={fries} alt="French Fries" />
    </Box>
  );
};

export default Header;
