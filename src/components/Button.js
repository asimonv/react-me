import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.a`
  text-decoration: none;
  margin: 0;
  cursor: pointer;
`;

const Button = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
