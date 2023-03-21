import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../button";

function Hero() {
  const heroRef = useRef();

  const scrollToNextSection = () => {
    window.scrollTo({
      top: heroRef.current.offsetHeight,
      behavior: "smooth",
    });
  };
  return (
    <HeroContainer ref={heroRef}>
      <TitleContainer>
        <h1>Relaxing is Never Easy on Your Own</h1>
        <h2>
          Come and discover your oasis. It has never been easier to take a break
          from stress and the harmful factors that surround you every day!
        </h2>

        <ButtonGroup>
          <Button
            text="View Services"
            bgColor="transparent"
            border="2px solid #fff"
            textColor="#fff"
            margin={"0 1rem 0 0"}
            hover="background-color: #fff; color: var(--green-med);"
          />
          <Button
            border="2px solid var(--green-med)"
            textColor="#fff"
            text="Book Now"
            bgColor="var(--green-med)"
            margin={"0 0 0 1rem"}
            hover="background-color: transparent; color: var(--green-med); border: 2px solid #fff;"
          />
        </ButtonGroup>
      </TitleContainer>
      <ScrollDownIndicator onClick={scrollToNextSection}>
        <IoIosArrowDown />
      </ScrollDownIndicator>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
  background-image: url("./images/landscape/banner-img.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const TitleContainer = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;

  text-align: center;
  width: 60%;
  z-index: 11;

  h1 {
    color: var(--green-light);
    font-weight: 400;
    font-size: 4rem;
    letter-spacing: 1.2px;
    margin-bottom: 2rem;
    opacity: 0.9;
    animation: fadeIn 2s ease-in-out;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5),
      -2px -2px 5px rgba(0, 0, 0, 0.5);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.9;
    }
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 300;
    color: #fff;
    opacity: 0.8;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  opacity: 0;
  animation: fadeUp 1.5s ease-in forwards;
  animation-delay: 1.5s;

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const bounce = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const fadeDown = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ScrollDownIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 50%;
  transform: translateX(50%);
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  opacity: 0;

  animation: ${bounce} 2s ease infinite, ${fadeDown} 3s ease forwards;
  animation-delay: 3s;
`;
