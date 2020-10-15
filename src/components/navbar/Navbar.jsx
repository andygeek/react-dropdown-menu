import React from "react";
import "../../index.css"; // Global variables css
import "./Navbar.css";

export const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};
