import React from "react";
import { Container, Stack } from "@mui/material";
import HomeParagraph from "./HomeParagraph";
import freedom from "../../../images/homepage/2013_1_25-Egyptian-revolution-2.jpg";
import policeForce from "../../../images/homepage/000_nic532692.webp";
import filmMaker from "../../../images/homepage/home-header.jpeg";

const paragraphs = [
  {
    photo: freedom,
    text: `The 25th of January 2011, is the date when the Egyptian revolution was
      born, a part from the Arab spring, flowers bloomed in Egypt's streets.
      The Egyptian revolution is not just a revolution it's a symbol of
      resistance, a vibe that everyone still feel when we walk downtown
      Cairo, you see it on the walls, on the faces of people and hear it in
      the unspoken words.`,
  },
  {
    photo: policeForce,
    text: `The evil powers always fight revolutions. However,
      revolutions are ideas, and ideas never die. By this festival we make
      revolutionary ideas live forever, and we honour the memory of the
      great revolution of the 25th of January.`,
  },
  {
    photo: filmMaker,
    text: `The festival was supposed to
      start in 2021 but it was difficult because of the Covid lock down, now
      the image is clearer and we decided to rebirth the festival as we see
      it as a platform for all the revolutionary ideas.`,
  },
];
function HomeContent() {
  //write code here
  return (
    <Container sx={{ py: 5 }} id="home-content">
      <Stack>
        {paragraphs.map((paragraph, index) => {
          const componentType = index % 2 === 0 ? "left" : "right";
          return (
            <HomeParagraph
              key={index}
              content={paragraph}
              type={componentType}
            />
          );
        })}
      </Stack>
    </Container>
  );
}

export default HomeContent;
