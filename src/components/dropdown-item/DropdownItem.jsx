import React from "react";
import "../../index.css";
import "./DrowdownItem.css";


export const DropdownItem = (props) => {
  return (
    <a href="/#" className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
};
