import React, { Fragment, useState } from "react";
import styled from "styled-components";
import entries from "../entries";
import Entry from "../components/Entry";

const NavigationButton = styled.button`
  background: url("${props => props.url}") no-repeat center center;
  width: 30px;
  height: 20px;
  border: 0;
  background-size: cover;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  margin: 40px 0;
  flex-direction: ${props =>
    props.entryIndex === entries.length - 1 ? "column" : "row"};
  justify-content: space-between;
`;

const BlogScreen = props => {
  const [entryIndex, setEntryIndex] = useState(entries.length - 1);
  const _onClick = val => {
    setEntryIndex(entryIndex + val);
  };

  const currentEntry = entries[entryIndex];
  return (
    <Fragment>
      <NavigationWrapper entryIndex={entryIndex}>
        {entryIndex < entries.length - 1 && (
          <NavigationButton
            onClick={() => _onClick(1)}
            url={`${process.env.PUBLIC_URL}/images/prev.png`}
          />
        )}
        {entryIndex > 0 && (
          <NavigationButton
            style={{ alignSelf: "flex-end" }}
            url={`${process.env.PUBLIC_URL}/images/next.png`}
            onClick={() => _onClick(-1)}
          />
        )}
      </NavigationWrapper>
      <Entry key={currentEntry.id} item={currentEntry} />
    </Fragment>
  );
};

export default BlogScreen;
