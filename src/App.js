import React from "react";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { NavItem } from "./components/navitem/Navitem.jsx";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";

export const App = () => {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
      </Navbar>
    </div>
  );
};
