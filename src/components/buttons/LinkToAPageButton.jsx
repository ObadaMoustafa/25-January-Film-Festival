import React from "react";
import { Link, useLocation } from "react-router-dom";
const LinkToAPageButton = (props) => {
  const location = useLocation();
  const pathname = props.pathname;
  const linkTo = props.linkTo;
  const className = props.className;
  const name = props.name;
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
