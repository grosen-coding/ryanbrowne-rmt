import React from "react";
import styled, { css } from "styled-components";
import Button from "../../../../components/button";

function FeatureCard({ title, imgSrc, description }) {
  return (
    <Card>
      <h3>{title}</h3>
      <Underline />
      <img src={imgSrc} alt={title} />
      <p>{description}</p>
      <ButtonWrapper>
        <ButtonArrow>
          <Arrow>&#x2192;</Arrow>
        </ButtonArrow>
        <ButtonFull>
          <Button
            border="none"
            textColor="#fff"
            text="Learn More"
            bgColor="var(--green-med)"
            margin="0"
            padding="1rem 2rem"
            width="200px"
          />
        </ButtonFull>
      </ButtonWrapper>
    </Card>
  );
}

export default FeatureCard;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  position: relative;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    & > div:nth-child(2) {
      right: 3px;
      opacity: 0.5;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    padding: 1.2rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    margin: 2rem 0 4rem;
    padding: 0 2rem;
    opacity: 0.7;
  }
`;

const buttonStyles = css`
  border: none;
  outline: none;
  color: #ffffff;
  background-color: var(--green-med);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in-out;
  padding: 0;
`;

const Underline = styled.div`
  background-color: var(--green-med);
  height: 3px;
  right: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 150px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
`;

const ButtonArrow = styled.div`
  ${buttonStyles}
  z-index: 2;
`;
const ButtonFull = styled.div`
  ${buttonStyles}
  opacity: 0;
  transform: scaleX(0.7) translate(-50%, -50%);
  transform-origin: left;
  z-index: 2;
  transition: all 0.3s ease-in-out;
  width: auto;
  height: auto;
  border: none;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:hover ${ButtonArrow}, &:focus ${ButtonArrow} {
    opacity: 0;
    transform: translate(20px, -50%);
  }

  &:hover ${ButtonFull}, &:focus ${ButtonFull} {
    opacity: 0.9;
    transform: scaleX(1) translate(-50%, -50%);
    transform-origin: left;
    z-index: 5;
  }
`;

const Arrow = styled.span`
  &:hover,
  &:focus {
    opacity: 0;
    transform: translate(20px);
  }
`;
