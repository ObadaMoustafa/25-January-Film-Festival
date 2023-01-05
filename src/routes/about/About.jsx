import React from 'react';
import { Container } from '@mui/material';
import ProfileCard from '../../components/card/ProfileCard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { data as teams } from '../../components/about-data/data.js';
import about from '../../images/homepage/000_nic532692.webp';
import image1 from '../../components/about-data/team_images/Salah_Amer.png';
import image2 from '../../components/about-data/team_images/Tommy.png';
import image3 from '../../components/about-data/team_images/Adham_Hasanin.png';
import image4 from '../../components/about-data/team_images/Motaz_AlNazlawy.png';
import image5 from '../../components/about-data/team_images/Obada.png';
import image6 from '../../components/about-data/team_images/Fadi.png';
import image7 from '../../components/about-data/team_images/Ali.png';
import './style.css';

function About() {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <Container sx={{ flexGrow: 1 }}>
      <div className="about-container">
        <div className="about-image-container">
          <img src={about} alt="about" />
        </div>
        <div className="about-info">
          <div className="about-title">
            <span className="double-overlay">
              <ChevronRightIcon className="double-arrow-1" />
              <ChevronRightIcon className="double-arrow-2" />
            </span>
            <h2>About Us</h2>
          </div>
          <ul className="description">
            <li className="description-list">
              <span className="single-overlay">
                <ChevronRightIcon className="single-arrow" />
              </span>
              <p>
                This is how the idea of founding this film festival came to us.
                We are trying to spread the idea of the revolution, in any place
                on earth. It doesn't matter where you come from. As the Egyptian
                revolution inspired the whole world we hope that our festival
                will inspire filmmakers all over the world.
              </p>
            </li>
            <li className="description-list">
              <span className="single-overlay">
                <ChevronRightIcon className="single-arrow" />
              </span>
              <p>
                However we want to explain something very important, our
                festival is supporting revolutionary ideas not necessarily led
                to political revolution, it can be ideas that might lead to
                musical ideas, social movements, refugees support ideological
                revolutions, or ideas that can change the view of a certain
                image or inspiring ideas to change societies or help them to
                make their lives better. We are standing for the word revolution
                with the overall meaning of the word.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="team-container">
        <div className="team-title">
          <span className="double-overlay">
            <ChevronRightIcon className="double-arrow-1" />
            <ChevronRightIcon className="double-arrow-2" />
          </span>
          <h2>25 January Film Festival Team</h2>
        </div>
        <div className="card-wrapper">
          {teams.map((team, index) => (
            <ProfileCard key={index} person={team} image={images[index]} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default About;
