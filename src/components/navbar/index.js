// src/components/Navbar.js
import React, { useState } from "react";
import { Nav, NavLink, NavMenu } from "./Navbar.styles";
import Hamburger from "../hamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "Rejuvenate", path: "#featuredServices" },
    { title: "Misson", path: "#about" },
    { title: "Services", path: "#services" },
    { title: "Promotions", path: "#promotions" },
    { title: "Testimonials", path: "#testimonials" },
    { title: "Blog", path: "#blog" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <Nav>
      <Hamburger isOpen={isOpen} toggle={toggle} />
      <NavMenu isOpen={isOpen}>
        {navLinks.map(({ title, path }) => (
          <NavLink
            key={title}
            to={path}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            {title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
