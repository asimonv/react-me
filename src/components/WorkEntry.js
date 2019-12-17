import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";

const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
      <TextWrapper>
        {work.url ? (
          <a href={work.url}>
            {work.title}, {work.from}
          </a>
        ) : (
          <EntryText>
            {work.title}, {work.from}
          </EntryText>
        )}

        <EntryText>{work.used.join(", ")}</EntryText>
      </TextWrapper>
      {work.content && work.content.length ? (
        <Carousel entries={work.content} />
      ) : null}
    </EntryWrapper>
  );
};

export default WorkEntry;
