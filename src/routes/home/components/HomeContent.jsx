import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function HomeContent() {
  //write code here
  return (
    <Container sx={{ py: 5 }} id="home-content">
      <Stack direction="row" spacing={3}>
        <KeyboardDoubleArrowRightIcon
          sx={{ fontSize: { sm: 30, md: 60 }, color: "second.main" }}
        />
        <Typography
          component="article"
          color="white"
          fontSize={{ sm: 20, md: 30 }}
        >
          The 25th of January 2011, is the date when the Egyptian revolution was
          born, a part from the Arab spring, flowers bloomed in Egypt's streets.
          The Egyptian revolution is not just a revolution it's a symbol of
          resistance, a vibe that everyone still feel when we walk downtown
          Cairo, you see it on the walls, on the faces of people and hear it in
          the unspoken words. The evil powers always fight revolutions. However,
          revolutions are ideas, and ideas never die. By this festival we make
          revolutionary ideas live forever, and we honour the memory of the
          great revolution of the 25th of January. The festival was supposed to
          start in 2021 but it was difficult because of the Covid lock down, now
          the image is clearer and we decided to rebirth the festival as we see
          it as a platform for all the revolutionary ideas.
        </Typography>
      </Stack>
    </Container>
  );
}

export default HomeContent;
