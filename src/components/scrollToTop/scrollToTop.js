// src/components/ScrollToTop.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollToTopButton = styled.button`
  background-color: var(--green-med);
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  opacity: 0.7;
  z-index: 1000;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    setVisible(currentScroll > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <ScrollToTopButton onClick={scrollToTop} title="Scroll to top">
        &uarr;
      </ScrollToTopButton>
    )
  );
};

export default ScrollToTop;
