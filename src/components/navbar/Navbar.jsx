import { useState } from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import "./navbar.css";
import logo from "./logo.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const activeStyle = {
    color: "var(--secondary-color)",
  };
  const passiveStyle = {
    color: "#ffffff",
  };

  const navLinks = [
    { id: 1, name: "About", to: "/about" },
    {
      id: 2,
      name: "Juries",
      to: "/juries",
    },
    { id: 3, name: "Awards & Conditions", to: "/awards-and-conditions" },
    {
      id: 4,
      name: "Broadcasting & Screening",
      to: "/broadcasting-and-screening",
    },
  ];

  return (
    <Box bgcolor="first.main">
      <div className="navbar">
        <NavLink to="/" className="logo-part">
          <img src={logo} alt="logo" width={50} />
          <p className="logo-text">
            25 January <br></br>{" "}
            <span className="logo-text-second">Film Festival</span>
          </p>
        </NavLink>
        <div>
          <div className="links">
            {navLinks.map((item) => (
              <NavLink
                className="nav-text"
                to={item.to}
                key={item.id}
                style={({ isActive }) =>
                  isActive ? activeStyle : passiveStyle
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <NavLink to="#" className="menu-bars">
            {!sidebar ? (
              <FaBars className="hamburger" onClick={showSidebar} />
            ) : (
              <AiOutlineClose className="hamburger" onClick={showSidebar} />
            )}
          </NavLink>
        </div>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <div className="links-hamburger">
            {navLinks.map((item) => (
              <NavLink
                className="nav-text-hamburger"
                to={item.to}
                key={item.id}
                style={({ isActive }) =>
                  isActive ? activeStyle : passiveStyle
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </ul>
      </nav>
    </Box>
  );
}

export default Navbar;
