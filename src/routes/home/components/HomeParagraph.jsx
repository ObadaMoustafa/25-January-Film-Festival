import { Card, CardMedia, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

function HomeParagraph({ content, type }) {
  //write code here
  const { photo, text } = content;
  return (
    <Grid
      container
      component="div"
      my={3}
      spacing={3}
      justifyContent="center"
      alignItems="center"
      direction={type === "left" ? "row" : "row-reverse"}
    >
      <Grid item xs={12} md={4}>
        <CardMedia component="img" src={photo} sx={{ p: 0 }} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography
          component="p"
          color="white"
          textAlign="justify"
          width="100%"
          px={3}
          py={2}
          sx={{ fontSize: { xs: 20, md: 25 } }}
        >
          <ArrowForwardIosIcon color="third" sx={{ mr: 3 }} />
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default HomeParagraph;
