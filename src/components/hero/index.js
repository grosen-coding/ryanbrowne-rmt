import React from "react";
import styled from "styled-components";
import Button from "../button";

function Hero() {
  return (
    <HeroContainer>
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
            border="1px solid #fff"
            textColor="#fff"
            margin={"0 1rem 0 0"}
          />
          <Button
            border="none"
            textColor="#fff"
            text="Book Now"
            bgColor="var(--green-med)"
            margin={"0 0 0 1rem"}
          />
        </ButtonGroup>
      </TitleContainer>
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
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const TitleContainer = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;

  text-align: center;
  width: 50%;
  z-index: 11;

  h1 {
    color: #fff;
    font-weight: 300;
    font-size: 3.8rem;
    letter-spacing: 1.2px;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 300;
    color: #fff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
