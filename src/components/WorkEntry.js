import React from "react";
import styled from "styled-components";
import Image from "./Image";

const WorkImages = styled.div`
  flex: 1;
  flex-direction: row;
`;

const EntryWrapper = styled.div`
  flex: 0.5;
`;

const TextWrapper = styled.div`
  margin: 10px 0;
`;

const EntryText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const WorkEntry = ({ work }) => {
  return (
    <EntryWrapper>
      <WorkImages>
        {work.images.map(x => <Image id={x} src={x} alt="image" />)}
      </WorkImages>
      <TextWrapper>
        <EntryText>
          {work.title}, {work.from}
        </EntryText>
        <EntryText>{work.used.join(", ")}</EntryText>
      </TextWrapper>
    </EntryWrapper>
  );
};

export default WorkEntry;
