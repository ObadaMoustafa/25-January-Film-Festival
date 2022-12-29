import { data as juries } from '../juries-data/data.js';
import React from 'react';
import image1 from '../juries-data/juries_images/Rena_Netjes-new.jpg';
import image2 from '../juries-data/juries_images/Asaad_Taha-new.jpg';
import image3 from '../juries-data/juries_images/Madeleine_Leroyer-new.jpg';
import image4 from '../juries-data/juries_images/Wagdy_El_Araby-new.jpg';
import image5 from '../juries-data/juries_images/Teun_Castelein-new.jpg';
import './style.css';

const Card = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className="card-wrapper">
      {juries.map((jury, index) => {
        const { id, name, profession, description, awards } = jury;
        return (
          <div className="card" key={id}>
            <div className="image-container">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={images[index]} alt="name" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="name">{name}</h3>
              <h3 className="profession">{profession}</h3>
              <p className="description">{description}</p>
              <ul>
                {awards && (
                  <>
                    <h3 className="awards">Awards</h3>
                    {awards?.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </>
                )}
              </ul>
            </div>
              <button className="btn">Show more</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
