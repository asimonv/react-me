import React, { useState } from "react";
import styled from "styled-components";
import Image from "./Image";

const Wrapper = styled.div`
  display: flex;
  background-color: ${props => (props.dark ? "black" : "transparent")};
  color: ${props => (props.dark ? "white" : "black")};
  padding: 20px;
  border: ${props => (props.dark ? "none" : "1px solid black")};
  flex-direction: column;
  cursor: help;
`;

const ComponentId9 = () => {
  const [dark, setDark] = useState(true);
  const _onClick = () => {
    setDark(!dark);
  };
  return (
    <Wrapper onClick={_onClick} dark={dark}>
      <p id="flesh">Made of plastic and flesh.</p>
      <Image
        url={`${process.env.PUBLIC_URL}/images/flesh.png`}
        labelledby="flesh"
        alt="flesh"
      />
      <p>
        After a while, it was converted into something else. Not recognizable.
      </p>
      <p>
        Curves that travel to take you apart from what was knew. Thinking about
        what others may think. Dangerous and weird. A spiral of uncomunication.
      </p>
      <p>
        Thighs, legs, curves, <i>flesh</i>, face, hair and tongue. Others, not
        here. No longer available. Hourglass body filled with something else.
        Kafkaesque transformation. Unrecognizable words that created another
        world. Inhabitable. A war that's invisible to the human eye.
      </p>
      <p>A mantis that cycled into Salome.</p>
      <Image
        url={`${process.env.PUBLIC_URL}/images/line.png`}
        labelledby="a division curve"
        alt="a division curve"
      />
      <ul>
        <li>Non-traversable</li>
        <li>Language extinguisher</li>
        <li>Worlds destroyer</li>
        <li>Real</li>
      </ul>
    </Wrapper>
  );
};

export default ComponentId9;
