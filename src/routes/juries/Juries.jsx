import React from "react";
import ProfileCard from "../../components/card/ProfileCard";
import { data as juries } from "./juries-data/data.js";
import "./style.css";
import { Container } from "@mui/material";

function Juries() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <div className="broadcast-introduction">
        <h2>
          Our jury members are experts and highly experienced filmmakers,
          documentary makers, artists and journalists. They are also from
          different countries around the world. Therefore, we bring different
          opinions and tastes to ensure that all the submitted films will be
          viewed from different perspectives. The Jury members will watch all
          submitted films that will make it to the final nominees and they will
          give points for each film. The film with the highest points in each
          genre will win the award.
        </h2>
      </div>
      <div className="card-wrapper">
        {juries.map((jury, index) => (
          <ProfileCard key={index} person={jury} />
        ))}
      </div>
    </Container>
  );
}

export default Juries;
