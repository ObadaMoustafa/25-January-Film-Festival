import { Box } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";

function Home() {
  //write code here

  //* header > slide
  //* content
  return (
    <Box component="div" flexGrow={1}>
      <Header />
      <HomeContent />
    </Box>
  );
}

export default Home;
