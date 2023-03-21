// src/components/Hamburger.styles.js
import styled from "styled-components";

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  }

  &:focus {
    outline: none;
  }
`;

export const HamburgerIcon = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${({ isOpen }) => (isOpen ? "transparent" : "#333")};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  &::before,
  &::after {
    width: 2rem;
    height: 0.25rem;
    background-color: #333;
    border-radius: 10px;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  &::before {
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-0.625rem")};
  }

  &::after {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    bottom: ${({ isOpen }) => (isOpen ? "0" : "-0.625rem")};
  }
`;
