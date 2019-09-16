import React, { Fragment, useState } from "react";
import styled from "styled-components";
import entries from "../entries";
import Entry from "../components/Entry";

const NavigationWrapper = styled.div`
  display: flex;
  margin: 10px 0;
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
          <button onClick={() => _onClick(1)}>Prev</button>
        )}
        {entryIndex > 0 && (
          <button
            style={{ alignSelf: "flex-end" }}
            onClick={() => _onClick(-1)}
          >
            Next
          </button>
        )}
      </NavigationWrapper>
      <Entry key={currentEntry.id} item={currentEntry} />
    </Fragment>
  );
};

export default BlogScreen;
