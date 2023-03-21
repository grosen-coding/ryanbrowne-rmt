import React from "react";
import styled from "styled-components";
import { Section } from "../../../components/section";
import { PageWrapper } from "../../../components/wrapper";
import FeatureCard from "./featureCard/featureCard";

const featuredServices = [
  {
    title: "Ayurveda Massage",
    imgSrc: "/images/landscape/ayurveda.jpeg",
    description:
      "It has never been easier to take a break from stress and the harmful factors that surround you every day!",
  },
  {
    title: "Luxury Massage",
    imgSrc: "/images/landscape/massage-rocks-sm.jpg",
    description:
      "It has never been easier to take a break from stress and the harmful factors that surround you every day!",
  },
  {
    title: "Healing Massage",
    imgSrc: "/images/landscape/spa-towels.jpeg",
    description:
      "It has never been easier to take a break from stress and the harmful factors that surround you every day!",
  },
];

function Featured() {
  return (
    <Section
      bgColor="var(--text-light)"
      className="featured-services"
      id="featured-services"
      height="auto"
      padding="4rem 0 5rem"
    >
      <PageWrapper>
        <FeaturedTitle>
          <h2>Rejuvenating Experience Guaranteed</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            tincidunt nunc, euismod aliquam nisl. Nullam euismod, nisl sit amet
            aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit
            amet sapien. Sed euismod tincidunt nunc, euismod aliquam nisl.
            Nullam euismod, nisl sit amet aliquam luctus, nisl nisl aliquam
            nisl, eu aliquam nisl nisl sit amet sapien.
          </p>
        </FeaturedTitle>
        <FeaturedServices>
          {featuredServices.map((service, index) => (
            <FeatureCard
              key={index}
              title={service.title}
              imgSrc={service.imgSrc}
              description={service.description}
            />
          ))}
        </FeaturedServices>
      </PageWrapper>
    </Section>
  );
}

export default Featured;

const FeaturedTitle = styled.div`
  text-align: center;
  /* margin-bottom: 4rem; */

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    opacity: 0.8;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    width: 70%;
    margin: 0 auto;
    opacity: 0.7;
  }
`;

const FeaturedServices = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 4rem;
`;
