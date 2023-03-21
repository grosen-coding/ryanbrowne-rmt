import React from "react";
import Logo from "../logo";
import ContactInfo from "./contactInfo";
import styled from "styled-components";
import Navbar from "../navbar";

function Header() {
  return (
    <HeaderContainer id="home">
      <Logo />
      <ContactInfo />
      <Navbar />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 170px;
`;
