import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
import holdCameraPic from "../../../images/homepage/home-holding-camera.jpg";
import holdCameraPicMobile from "../../../images/homepage/home-holding-camera-mobile.jpg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Header() {
  //write code here
  const navbarHeight = useOutletContext();
  const typoProps = {
    color: "second.main",
    component: "h2",
    textAlign: "center",
    sx: {
      textShadow: "0 0 5px white, 0 0 5px white, 0 0 5px white",
      fontSize: 40,
    },
  };

  function readMore() {
    window.location = "/#home-content";
  }

  return (
    <Box
      height={`calc(100vh - ${navbarHeight}px)`}
      position="relative"
      sx={{
        backgroundImage: {
          xs: `url(${holdCameraPicMobile})`,
          md: `url(${holdCameraPic})`,
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        backgroundSize: "cover",
        resize: "both",
      }}
    >
      <Stack
        component="div"
        sx={{
          position: "absolute",
          width: { xs: "320px", md: 500 },
          right: { xs: 20, md: 100 },
          top: { xs: "auto", md: "40%" },
          bottom: { xs: 10, md: "auto" },
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography {...typoProps}>Change the world</Typography>
        <Typography
          {...typoProps}
          sx={{ ...typoProps.sx, alignSelf: { xs: "center" } }}
        >
          by your imagination
        </Typography>
        <Button
          variant="contained"
          color="second"
          endIcon={<KeyboardDoubleArrowDownIcon />}
          onClick={readMore}
          sx={{ alignSelf: { xs: "center", md: "flex-end" }, mt: 2 }}
        >
          Read more
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;
