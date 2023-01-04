import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./style.css";
import { Container } from "@mui/material";

function AwardsAndConditions() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <div className="page-introduction">
        <h2>
          13 years passed since the glorious revolution of the 25th of January.
        </h2>
        <h2>
          Bringing the memory of the revolution and let it lives forever in the
          heart of film makers; therefore, we make this film festival.
        </h2>
        <h2>
          You can submit your film in the festival as long as it fit with the
          criteria of the film genres and it has a revolutionary idea.
        </h2>
      </div>
      <div className="conditions-container">
        <div className="title">
          <span className="double-overlay">
            <ChevronRightIcon className="double-arrow-1" />
            <ChevronRightIcon className="double-arrow-2" />
          </span>
          <h2>Conditions</h2>
        </div>
        <ul className="description">
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <p>
              The submitted films can be about a revolutionary person, dead or a
              life, it can be about an idea; applied or still not applied. Any
              revolutionary film is welcome to be a part of our festival.
            </p>
          </li>
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <p>All submitted films must be made in the last 2 years max.</p>
          </li>
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <p>
              All submitted films must be in English or translated to English.
            </p>
          </li>
        </ul>
      </div>
      <div className="awards-container">
        <div className="title">
          <span className="double-overlay">
            <ChevronRightIcon className="double-arrow-1" />
            <ChevronRightIcon className="double-arrow-2" />
          </span>
          <h2>Awards</h2>
        </div>
        <ul className="description">
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <h5>Best long documentary:</h5>
          </li>
          <div className="paragraph">
            <p>The documentary's duration must be longer than 50 minutes.</p>
            <p>The resolution of the film must be at least 1080q.</p>
          </div>
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <h5>Best short documentary:</h5>
          </li>
          <div className="paragraph">
            <p>
              The documentary's duration must be between 20 minutes to 50
              minutes.
            </p>
            <p>The resolution of the film must be at least 1080q.</p>
          </div>
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <h5>Best Mini documentary:</h5>
          </li>
          <div className="paragraph">
            <p>The documentary's duration must be shorter than 20 minutes.</p>
            <p>The resolution of the film must be at least 1080q.</p>
          </div>
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <h5>Best feature film:</h5>
          </li>
          <div className="paragraph">
            <p>The film's duration must be longer than 50 minutes.</p>
            <p>The resolution of the film must be at least 1080q.</p>
          </div>
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <h5>Best short feature film:</h5>
          </li>
          <div className="paragraph">
            <p>The film's duration must be shorter than 50 minutes.</p>
            <p>The resolution of the film must be at least 1080q.</p>
          </div>
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <h5>Best short feature film:</h5>
          </li>
          <div className="paragraph">
            <p>The film can be feature or documentary.</p>
            <p>
              The duration of the film or documentary must be shorter than 50
              minutes.
            </p>
            <p>The resolution of the film must be at least 480q.</p>
          </div>
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <h5>The revolutionary activities award:</h5>
          </li>
          <div className="paragraph">
            <p>
              This honouring award is given to any activist / organization, who
              contribute in a revolutionary idea or movement.
            </p>
            <p>
              This award goes to any person: dead, alive or detained. You can
              nominate any person or organization you believe they deserve the
              award.
            </p>
          </div>
        </ul>
      </div>
      <div className="submitting-container">
        <div className="title">
          <span className="double-overlay">
            <ChevronRightIcon className="double-arrow-1" />
            <ChevronRightIcon className="double-arrow-2" />
          </span>
          <h2>Submitting</h2>
        </div>
        <p className="submitting-container-info">
          The films will be viewed first by a preliminary committee, they will
          check the main line of the festival if they are in the submitted
          films, if the film doesn't match with the main guidelines of the
          festival this preliminary committee will exclude the submitted film
          from the festival.
        </p>
        <ul className="description">
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <h5>Second stage:</h5>
          </li>
          <div className="paragraph">
            <p>
              will be passing the submitted films to preliminary jury; they will
              make the selections and choose three projects for each award.
              These three projects will graduate to the final selection stage.
            </p>
          </div>
          <li className="description-list">
            <span className="single-overlay">
              <ChevronRightIcon className="single-arrow" />
            </span>
            <h5>The final stage:</h5>
          </li>
          <div className="paragraph">
            <p>
              our main jury will look at the submitted films and give decisions
              who are the winners.
            </p>
            <p>
              This main jury will be from big professional film makers and
              documentary makers.
            </p>
          </div>
          <div className="link-container">
            <span className="double-overlay">
              <ChevronRightIcon className="submitting-single-arrow-1" />
              <ChevronRightIcon className="submitting-single-arrow-2" />
            </span>
            <h5>
              <Link to={"/juries"} className="link-to-jury">
                Click here to meet our jury.
              </Link>
            </h5>
          </div>
        </ul>
      </div>
      <div className="submitting-date">
        <p>The submitting dates will be announced soon.</p>
      </div>
      <div className="btn-container">
        <button className="nominate-btn">
          <Link to={"/"}>Click here to nominate</Link>
        </button>
      </div>
    </Container>
  );
}

export default AwardsAndConditions;
