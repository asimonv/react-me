import React from "react";
import styled from "styled-components";

const TextContainer = styled.p`
  text-decoration: ${props => props.striked || "none"};
  position: ${props => props.position || "relative"};
  color: ${props => props.color || "black"};
`;

const StyledText = ({ children, ...props }) => {
  return <TextContainer {...props}>{children}</TextContainer>;
};

export default StyledText;
