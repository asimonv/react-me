import React, { useState } from "react";

const Test = () => {
  const [active, setActive] = useState(false);
  return (
    <button onClick={() => setActive(!active)}>
      {active ? "Thanks..." : "Press Me"}
    </button>
  );
};

export default Test;
