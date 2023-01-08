import React from "react";
import ProfileCard from "../../components/card/ProfileCard";
import { data as juries } from "../../components/juries-data/data.js";
import "./style.css";
import { Container } from "@mui/material";

function Juries() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <div className="card-wrapper">
        {juries.map((jury, index) => (
          <ProfileCard key={index} person={jury} />
        ))}
      </div>
    </Container>
  );
}

export default Juries;
