import styled from "styled-components";

export const Section = styled.section`
  background: ${(props) => props.bgColor};
  width: 100%;
  height: ${(props) => props.height};
  margin: 0 auto;
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  /* padding: 0 3rem; // Add padding if you want some space around the content */
`;
