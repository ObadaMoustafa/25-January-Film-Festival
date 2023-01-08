import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Header() {
  //write code here
  const holdCameraPic =
    "https://res.cloudinary.com/ddt6yex1z/image/upload/v1673192542/25januaryfilmfestival/others/homepage-holding-camera_rty78m.jpg";
  const holdCameraPicMobile =
    "https://res.cloudinary.com/ddt6yex1z/image/upload/v1673192542/25januaryfilmfestival/others/home-holding-camera-mobile_kyqa3o.jpg";

  const typoProps = {
    color: "white",
    component: "h2",
    textAlign: "center",
    sx: {
      textShadow: "0 0 5px black, 0 0 5px white, 0 0 5px black",
      fontSize: { xs: 28, md: 40 },
      fontWeight: 900,
    },
  };

  function readMore() {
    window.location = "/#home-content";
  }

  return (
    <Box
      height={`60vh`}
      position="relative"
      sx={{
        backgroundImage: {
          xs: `url(${holdCameraPicMobile})`,
          sm: `url(${holdCameraPic})`,
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        resize: "both",
      }}
    >
      <Stack
        component="div"
        sx={{
          position: "absolute",
          width: { xs: "auto", md: 500 },
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
