import React from "react";
import styled from "styled-components";

function ContactInfo({ icon, title, subTitle }) {
  return (
    <>
      <CardContainer>
        <IconWrapper>
          <span>{icon}</span>
        </IconWrapper>
        <CardInfo>
          <h4>
            <span>{title}</span>
          </h4>
          <h5>{subTitle}</h5>
        </CardInfo>
      </CardContainer>
    </>
  );
}

export default ContactInfo;

const CardContainer = styled.div`
  background-color: #fff;
  /* box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); */
  border-left: 1px solid lightgrey;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  span {
    color: var(--text-dark);
    opacity: 0.5;
  }
`;

const IconWrapper = styled.div`
  color: var(--text-dark);
  font-size: 1.5rem;
  padding-right: 0.5rem;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h4 {
    font-weight: 400;
    letter-spacing: 1.1px;
    font-size: 0.9rem;
  }

  h5 {
    opacity: 0.6;
    font-size: 1rem;
  }
`;
