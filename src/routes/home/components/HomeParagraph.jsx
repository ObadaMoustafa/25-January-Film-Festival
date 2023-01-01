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
      <Grid item xs={12} sm={6} md={4}>
        <CardMedia component="img" src={photo} sx={{ p: 0 }} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography
          component="p"
          color="white"
          textAlign="center"
          width="100%"
          py={2}
          sx={{
            fontSize: { xs: 20, md: 25 },
            textAlign: { xs: "center", md: "justify" },
            px: { xs: 1, md: 5 },
          }}
        >
          <ArrowForwardIosIcon color="third" sx={{ mr: 3 }} />
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default HomeParagraph;
