import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import "./nonFound.css";

function NonFound() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <div className="mainbox">
        <div className="number-camera">
          <div className="number-four">4</div>
          <i className="camera">
            <VideoCameraFrontIcon fontSize="xlarge" />
          </i>
          <div className="number-four">4</div>
        </div>
        <div className="page-not-found-message">
          <h3>Ooops...page not found.</h3>
          <p className="go-home">
            Let&apos;s go{" "}
            <Link to="/" className="home-link">
              home
            </Link>
            and try from there.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default NonFound;
