import React from "react";
import { Container, Stack } from "@mui/material";
import HomeParagraph from "./HomeParagraph";

const paragraphs = [
  {
    photo:
      "https://res.cloudinary.com/ddt6yex1z/image/upload/v1673192542/25januaryfilmfestival/others/2013_1_25-Egyptian-revolution-2_v5jvpc.jpg",
    text: `The 25th of January 2011, is the date when the Egyptian revolution was
      born, a part from the Arab spring, flowers bloomed in Egypt's streets.
      The Egyptian revolution is not just a revolution it's a symbol of
      resistance, a vibe that everyone still feel when we walk downtown
      Cairo, you see it on the walls, on the faces of people and hear it in
      the unspoken words.`,
  },
  {
    photo:
      "https://res.cloudinary.com/ddt6yex1z/image/upload/v1673192542/25januaryfilmfestival/others/000_nic532692_scq0yd.webp",
    text: `The evil powers always fight revolutions. However,
      revolutions are ideas, and ideas never die. By this festival we make
      revolutionary ideas live forever, and we honour the memory of the
      great revolution of the 25th of January.`,
  },
  {
    photo:
      "https://res.cloudinary.com/ddt6yex1z/image/upload/v1673192543/25januaryfilmfestival/others/home-header_xfhk8w.jpg",
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
