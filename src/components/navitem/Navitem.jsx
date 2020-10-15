import React, { useState } from "react";
import "../../index.css";
import "./Navitem.css";

export const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="/#" className="icon-button" onClick={()=>setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};
