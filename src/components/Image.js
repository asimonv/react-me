import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  & > img {
    width: ${props =>
      props.style && props.style.width ? props.style.width : "100%"};
    height: ${props =>
      props.style && props.style.height ? props.style.height : "100%"};
  }
`;

const Image = ({ src, alt, labelledby, style }) => {
  return (
    <ImageWrapper>
      <img style={style} src={src} alt={alt} aria-labelledby={labelledby} />
    </ImageWrapper>
  );
};

export default Image;
