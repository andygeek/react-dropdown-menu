import React from "react";
import "../../index.css";
import "./Navitem.css";

export const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href="/a" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
};
