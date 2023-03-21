import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <>
      <LogoContainer>
        <img src="./images/icons/flower-ryanrmt.png" alt="" />
        <div>
          <h3>Ryan Browne RMT</h3>
          <p>Holistic Massage Therapy</p>
        </div>
      </LogoContainer>
    </>
  );
}

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  h3 {
    opacity: 0.7;
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    opacity: 0.5;
    font-size: 1.2rem;
  }

  img {
    width: 60px;
    height: 50px;
    margin-right: 1rem;
  }
`;
