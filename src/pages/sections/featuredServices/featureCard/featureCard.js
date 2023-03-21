import React from "react";
import styled from "styled-components";
import Button from "../../../../components/button";

function FeatureCard({ title, imgSrc, description }) {
  return (
    <Card>
      <h3>{title}</h3>
      <img src={imgSrc} alt={title} />
      <p>{description}</p>
      <Button
        border="none"
        textColor="#fff"
        text="Book Now"
        bgColor="var(--green-med)"
      />
    </Card>
  );
}

export default FeatureCard;

const Card = styled.div`
  width: 400px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    padding: 1.2rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 10px; */
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    margin: 2rem 0 1rem;
    padding: 0 2rem;
  }
`;
