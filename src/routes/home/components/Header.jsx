import { Box } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
import holdCameraPic from "../../../images/home-header.jpeg";
function Header() {
  //write code here
  const { navHeight } = useOutletContext();
  return (
    <Box
      width="100vw"
      height={`calc(100vh - ${navHeight}px)`}
      position="absolute"
      left={0}
      sx={{ backgroundImage: `url(${holdCameraPic})` }}
    ></Box>
  );
}

export default Header;
