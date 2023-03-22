import React from "react";
import styled from "styled-components";
import { Section } from "../../../components/section";

const services = [
  {
    title: "Deep Tissue Massage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt nunc, euismod aliquam nisl. Nullam euismod, nisl sit amet aliquam luctus.",
    icon: "/images/icons/massage-ryanrmt.png",
    alt: "deep tissue massage",
  },
  {
    title: "Stone Massage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt nunc, euismod aliquam nisl. Nullam euismod, nisl sit amet.",
    icon: "/images/icons/flower-ryanrmt.png",
    alt: "stone massage",
  },
  {
    title: "Aromatherapy Massage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt nunc, euismod aliquam nisl. Nullam euismod.",
    icon: "/images/icons/aromatherapy-ryanrmt.png",
    alt: "aromatherapy massage",
  },
  {
    title: "Massage Therapy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt nunc, euismod aliquam nisl. Nullam euismod, nisl sit amet aliquam luctus.",
    icon: "/images/icons/buddha-ryanrmt.png",
    alt: "massage therapy",
  },
];

function ServicesSection() {
  return (
    <Section bgColor="#fff" id="services" height="500px" padding="0">
      <ServiceContainer>
        <Left>
          <Services>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <IconContainer>
                  <img
                    src={service.icon}
                    alt={service.alt}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                </IconContainer>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceCard>
            ))}
          </Services>
        </Left>
        <Right></Right>
      </ServiceContainer>
    </Section>
  );
}

export default ServicesSection;

const ServiceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
  background: #fff;
`;

const Services = styled.div`
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  height: 100%;
`;

const ServiceCard = styled.div`
  background-color: var(--text-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px dashed rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1rem 1rem 5rem rgba(0, 0, 0, 0.5);
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    padding: 0 1rem;
    text-align: center;
  }
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50%;
  border: solid 2px var(--green-med);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;

const Right = styled.div`
  background-image: url("/images/landscape/accent-oils-flowers.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 40%;
  height: 100%;
`;
