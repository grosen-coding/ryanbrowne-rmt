import React from "react";
import { Section } from "../../../components/section";
import { PageWrapper } from "../../../components/wrapper";
import styled from "styled-components";
import Button from "../../../components/button";

function Promotions() {
  return (
    <Section
      id="promotions"
      className="section section-promotions"
      title="Promotions"
      height="450px"
      padding="4rem 0"
      bgColor="url(/images/landscape/violet-flowers.jpeg) no-repeat center center/cover fixed"
      position="relative"
    >
      <Overlay />
      <PageWrapper className="promotions">
        <PromotionContent>
          <h2>Book Now To Get 25% Off</h2>
          <p>
            Book a package today and get up to 25 % discount on the packages.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            tincidunt nunc, euismod aliquam nisl. Nullam euismod, nisl sit amet
            aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit
            amet sapien. Sed euismod tincidunt nunc, euismod aliquam nisl.
            Nullam euismod, nisl sit amet aliquam luctus, nisl nisl aliquam
            nisl, eu aliquam nisl nisl sit amet sapien.
          </p>
          <Button
            border="none"
            textColor="#fff"
            text="Book Now"
            bgColor="var(--green-med)"
            margin={"2rem 0 0 0"}
            hover="background-color: #fff; color: var(--green-med);"
          >
            Book Now
          </Button>
        </PromotionContent>
      </PageWrapper>
    </Section>
  );
}

export default Promotions;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

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

const PromotionContent = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  text-align: left;
  padding: 0 2rem;
  position: relative;
  z-index: 10;

  h2 {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    text-align: left !important;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.5;
    opacity: 0.8;
  }
`;
