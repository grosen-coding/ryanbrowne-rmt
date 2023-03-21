// src/components/Hamburger.js
import React from "react";
import { HamburgerButton, HamburgerIcon } from "./Hamburger.styles";

const Hamburger = ({ isOpen, toggle }) => {
  return (
    <HamburgerButton onClick={toggle} isOpen={isOpen}>
      <HamburgerIcon isOpen={isOpen} />
    </HamburgerButton>
  );
};

export default Hamburger;
