// src/components/Navbar.styles.js
import styled, { css } from "styled-components";
import { Link } from "react-scroll";

const stickyNavStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  opacity: 0.8;
  margin: 0 auto;
  padding: 0;
  border-radius: 0;
  transform: none;
  z-index: 50;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const Nav = styled.nav`
  background-color: var(--green-med);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 1rem 2rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  position: absolute;
  height: 60px;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  transition: all 0.3s ease-in-out;

  ${({ isSticky }) => isSticky && stickyNavStyles};
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 540px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    padding: 2rem;
    transition: all 0.5s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
  }
`;

export const ScrollLink = styled(Link)`
  /* margin-left: 1.5rem; */
  font-size: 0.9rem;
  margin: 0 1rem;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  color: var(--text-light);
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #555;
  }

  &:active,
  &:focus {
    border-bottom: 2px solid #5554;
  }

  @media (max-width: 540px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;
