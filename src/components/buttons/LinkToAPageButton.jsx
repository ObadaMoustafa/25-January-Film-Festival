import React from "react";
import { Link } from "react-router-dom";
const LinkToAPageButton = ({ linkTo, className, name }) => {
  return (
    <div>
      <Link to={linkTo}>
        <button className={className}>{name}</button>
      </Link>
    </div>
  );
};

export default LinkToAPageButton;
