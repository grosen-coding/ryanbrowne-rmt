import React from "react";
import styled from "styled-components";
import { Section } from "../../../components/section";
import Button from "../../../components/button";

function WhoWeAre() {
  return (
    <Section
      bgColor="#fff"
      className="about"
      id="about"
      height="600px"
      padding="0"
    >
      <AboutMe>
        <Left></Left>
        <Right>
          <WhoWeAreContent>
            <h2>How I Can Help</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod tincidunt nunc, euismod aliquam nisl. Nullam euismod, nisl
              sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl
              nisl sit amet sapien. Sed euismod tincidunt nunc.
            </p>
            <Button
              to="/about"
              border="none"
              textColor="#fff"
              text="Book Now"
              bgColor="var(--green-med)"
              margin={"2rem 0 0 0"}
              hover="background-color: transparent; color: var(--green-med); outline: 1px solid var(--green-med);"
            >
              Learn More
            </Button>
          </WhoWeAreContent>
        </Right>
      </AboutMe>
    </Section>
  );
}

export default WhoWeAre;

const AboutMe = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  background-image: url("/images/landscape/accent-lotus-pond.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  background: #fff;
  padding: 0 20px;
  position: relative;
`;

const WhoWeAreContent = styled.div`
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: -10%;
  transform: translateY(-50%);
  width: 100%;
  padding: 3rem;
  max-width: 600px;
  box-shadow: 1rem 1rem 5rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  z-index: 10;

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    opacity: 0.7;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
  }
`;
