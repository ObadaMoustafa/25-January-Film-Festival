import React from "react";
import { Link, useLocation } from "react-router-dom";
const LinkToAPageButton = ({ pathname, linkTo, className, name }) => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== pathname && (
        <Link to={linkTo}>
          <button className={className}>{name}</button>
        </Link>
      )}
    </div>
  );
};

export default LinkToAPageButton;
