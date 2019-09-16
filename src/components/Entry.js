import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import Button from "./Button";

const EntryContainer = styled.div`
  flex-direction: column;
  background: transparent;
  border-radius: 3px;
  margin: 1.2em 0em;
  font-size: large;
`;

const EntryMedia = styled.div`
  display: flex;
  margin-top: 5px;
  & > * {
    width: 100%;
  }
`;

const EntryHeader = styled.div`
  margin-bottom: 10px;
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
`;

const EntryText = styled.div`
  text-align: left;
  margin: 0;
  align-self: flex-start;
  & :first-child {
    margin: 0;
  }
  font-size: large;
`;

const EntryContent = styled.div`
  display: flex;
  flex-direction: column;
  & :first-child {
    margin-top: 0;
  }
  flex: 1;
`;

const Entry = ({ item }) => {
  const [isActive, setIsActive] = useState(false);
  const _onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <EntryContainer key={item.id}>
      <EntryHeader>
        {item.date && (
          <Button onClick={_onClick}>{ReactHtmlParser(item.date)}</Button>
        )}
        {item.mood && isActive && (
          <div style={{ marginLeft: 5, lineHeight: "22px" }}>{item.mood}</div>
        )}
      </EntryHeader>
      <EntryContent>
        {item.text && <EntryText>{ReactHtmlParser(item.text)}</EntryText>}
        {item.media && <EntryMedia>{ReactHtmlParser(item.media)}</EntryMedia>}
        {item.content && <EntryContent>{item.content}</EntryContent>}
      </EntryContent>
    </EntryContainer>
  );
};

export default Entry;
