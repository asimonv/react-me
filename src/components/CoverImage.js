import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Quote from "./Quote";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
`;

const CoverImage = ({ title, ...props }) => {
  return (
    <Wrapper>
      <Image {...props} />
      <Quote title={title} />
    </Wrapper>
  );
};

export default CoverImage;
