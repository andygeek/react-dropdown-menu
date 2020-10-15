import React from "react";
import { DropdownItem } from "../dropdown-item/DropdownItem";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../icons/chevron.svg";
import "../../index.css"
import "./DropdownMenu.css"


export const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>My Profile</DropdownItem>
      <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
        My Profile
      </DropdownItem>
    </div>
  );
};
