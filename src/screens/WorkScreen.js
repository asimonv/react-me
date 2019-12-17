import React from "react";
import WorkEntry from "../components/WorkEntry";
import entries from "../entries/work";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0;
  width: 100%;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

const WorkScreen = () => {
  return (
    <Wrapper>
      {entries.map(x => (
        <WorkEntry id={x.id} work={x} />
      ))}
    </Wrapper>
  );
};

export default WorkScreen;
