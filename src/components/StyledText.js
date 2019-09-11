import React from "react";
import styled from "styled-components";

const TextContainer = styled.p`
  text-decoration: ${props => props.striked || "none"};
`;

const StyledText = ({ children, ...props }) => {
  return <TextContainer {...props}>{children}</TextContainer>;
};

export default StyledText;
