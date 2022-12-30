import React from 'react';
import ProfileCard from '../../components/card/ProfileCard';
import { data as juries } from '../../components/juries-data/data.js';
import image1 from '../../components/juries-data/juries_images/Rena_Netjes-new.jpg';
import image2 from '../../components/juries-data/juries_images/Asaad_Taha-new.jpg';
import image3 from '../../components/juries-data/juries_images/Madeleine_Leroyer-new.jpg';
import image4 from '../../components/juries-data/juries_images/Wagdy_El_Araby-new.jpg';
import image5 from '../../components/juries-data/juries_images/Teun_Castelein-new.jpg';
import './style.css';

function Juries() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className='card-wrapper'>
      {juries.map((jury, index) => (
        <ProfileCard person={jury} image={images[index]} />
      ))}
    </div>
  );
}

export default Juries;
