// src/components/Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { Nav, ScrollLink, NavMenu } from "./Navbar.styles";
import Hamburger from "../hamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const initialNavTop = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (initialNavTop.current === null) {
        initialNavTop.current = document
          .getElementById("navbar")
          .getBoundingClientRect().top;
      }

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(
        document.getElementById("navbar").getBoundingClientRect().top <= 0 &&
          scrollTop > initialNavTop.current
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "Rejuvenate", path: "#featuredServices" },
    { title: "About Me", path: "#about" },
    { title: "Services", path: "#services" },
    { title: "Promotions", path: "#promotions" },
    { title: "Blog", path: "#blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <Nav id="navbar" isSticky={isSticky}>
      <Hamburger isOpen={isOpen} toggle={toggle} />
      <NavMenu isOpen={isOpen}>
        {navLinks.map(({ title, path }) => (
          <ScrollLink
            key={title}
            to={path.slice(1)}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            {title}
          </ScrollLink>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
