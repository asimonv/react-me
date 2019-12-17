import React from "react";
import styled from "styled-components";
import Image from "./Image";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Carousel = ({ entries }) => {
  const [index, setIndex] = React.useState(0);
  const toggle = e => setIndex((index + 1) % entries.length);

  return (
    <Wrapper onClick={toggle}>
      {entries[index].image && (
        <Image
          id={entries[index].image}
          src={entries[index].image}
          alt="image"
        />
      )}
      {entries[index].video && (
        <video width="100%" controls>
          <source src={entries[index].video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
      <p>{entries[index].title}</p>
    </Wrapper>
  );
};

export default Carousel;
