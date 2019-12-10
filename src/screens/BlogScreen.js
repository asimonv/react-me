import React, { useEffect, useState } from "react";
import { Switch, Redirect, Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import EntryScreen from "./EntryScreen";
import entries from "../entries/blog";

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
  width: 100%;
  flex-direction: ${props =>
    props.entryIndex === entries.length - 1 ? "column" : "row"};
  justify-content: space-between;
`;

const BlogScreen = ({ history }) => {
  const [entryIndex, setEntryIndex] = useState(entries.length - 1);
  const { path } = useRouteMatch();
  const _onClick = val => {
    setEntryIndex(entryIndex + val);
  };

  useEffect(() => {
    history.push({
      pathname: `${path}/${entryIndex}`
    });
  }, [entryIndex, path, history]);

  return (
    <div className="content">
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
      <Switch>
        <Route path={`${path}/:postId`}>
          <EntryScreen />
        </Route>
        <Route path={path}>
          <Redirect to={`${path}/${entryIndex}`} />
        </Route>
      </Switch>
    </div>
  );
};

export default BlogScreen;
