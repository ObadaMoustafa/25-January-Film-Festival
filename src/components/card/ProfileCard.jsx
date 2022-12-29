import React from 'react';
import './style.css';

const ProfileCard = ({ person, image }) => {
  return (
      <div className="card" key={person.id}>
        <div className="image-container">
          <span className="overlay"></span>
          <div className="card-image">
            <img src={image} alt="name" className="card-img" />
          </div>
        </div>
        <div className="card-content">
          <h3 className="name">{person.name}</h3>
          <h3 className="profession">{person.profession}</h3>
          <p className="description">{person.description}</p>
          {person.awards && (
            <ul>
              <h3 className="awards">Awards</h3>
              {person.awards?.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
  );
};

export default ProfileCard;
