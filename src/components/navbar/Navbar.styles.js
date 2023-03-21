// src/components/Navbar.styles.js
import styled from "styled-components";
import { Link } from "react-scroll";

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

export const NavLink = styled(Link)`
  /* margin-left: 1.5rem; */
  font-size: 0.9rem;
  margin: 0 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-light);
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #555;
  }

  @media (max-width: 540px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;
