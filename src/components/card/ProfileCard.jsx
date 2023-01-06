import React from "react";
import "./style.css";

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
        {person.link && (
          <p className="card-content-contact">
            To contact please click{" "}
            <a
              className="card-content-contact-link"
              href={person.link}
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        )}

        {person.awards && (
          <ul className="unordered-list">
            <h3 className="awards">Awards</h3>
            {person.awards?.map((award, index) => (
              <li className="list" key={index}>
                {award}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
