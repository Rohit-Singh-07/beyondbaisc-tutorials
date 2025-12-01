import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#007bff" : "#333",
    textDecoration: isActive ? "none" : "underline",
    fontWeight: isActive ? "bold" : "normal",
    padding: "5px 10px",
  });

  return (
    <div>
      <div>About</div>
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
    </div>
  );
};

export default About;
