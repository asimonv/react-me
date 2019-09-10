import React from "react";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";

const EntryContainer = styled.div`
  display: flex;
  background: transparent;
  border-radius: 3px;
  margin: 0.5em 0em;
  padding: 0.25em 1em;
`;

const EntryMedia = styled.div`
  display: flex;
  margin-top: 5px;
  & > * {
    width: 100%;
  }
`;

const EntryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
  max-width: 80px;
`;

const EntryText = styled.div`
  text-align: left;
  margin: 0;
  align-self: flex-start;
  & :first-child {
    margin: 0;
  }
`;

const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Entry = ({ item }) => {
  return (
    <EntryContainer key={item.id}>
      <EntryHeader>
        {item.date && <span>{ReactHtmlParser(item.date)}</span>}
        {item.mood && (
          <span style={{ marginLeft: 5 }}>{ReactHtmlParser(item.mood)}</span>
        )}
      </EntryHeader>
      <EntryContent>
        {item.text && <EntryText>{ReactHtmlParser(item.text)}</EntryText>}
        {item.media && <EntryMedia>{ReactHtmlParser(item.media)}</EntryMedia>}
        {item.content}
      </EntryContent>
    </EntryContainer>
  );
};

export default Entry;
