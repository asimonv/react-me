import React from "react";
import WorkEntry from "../components/WorkEntry";
import entries from "../entries/work";

const WorkScreen = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}
    >
      {entries.map(x => <WorkEntry id={x.id} work={x} />)}
    </div>
  );
};

export default WorkScreen;
