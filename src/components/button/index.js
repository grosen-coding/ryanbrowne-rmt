import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

function Button({ bgColor, text, border, textColor, margin, padding, width }) {
  return (
    <ButtonCTA
      textColor={textColor}
      border={border}
      bgColor={bgColor}
      margin={margin}
      padding={padding || "1rem 2rem"}
      width={width || "auto"}
    >
      {text}
      <span>
        <IoIosArrowForward />
      </span>
    </ButtonCTA>
  );
}

export default Button;

const ButtonCTA = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  border-radius: 2rem;
  font-size: 0.8rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin};

  span {
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 1.2rem;
    }
  }
`;
