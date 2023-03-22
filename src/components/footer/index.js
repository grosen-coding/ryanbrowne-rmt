import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const navLinks = [
  { title: "Home", path: "#home" },
  { title: "Rejuvenate", path: "#featuredServices" },
  { title: "Mission", path: "#about" },
  { title: "Services", path: "#services" },
  { title: "Promotions", path: "#promotions" },
  { title: "Blog", path: "#blog" },
  { title: "Contact", path: "#contact" },
];

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <AiFillFacebook />
        <AiFillTwitterSquare />
        <AiFillInstagram />
      </SocialMedia>
      <NavLinks>
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.path}>
            {link.title}
          </NavLink>
        ))}
      </NavLinks>
      <Copyright>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://www.gary-rosen.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          GSRCoding
        </a>
        . All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const NavLink = styled.a`
  color: #fff;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--green-light);
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1.4px;
  margin-bottom: 1rem;

  a {
    color: var(--green-med) !important;

    &:hover {
      color: var(--text-light) !important;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    color: var(--green-med);
    font-size: 1.5rem;
    margin: 0 0.5rem;
    cursor: pointer;

    &:hover {
      color: var(--text-light);
    }
  }
`;
