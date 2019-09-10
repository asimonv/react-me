import React, { useState } from "react";

const Test = () => {
  const [active, setActive] = useState(false);
  return (
    <button onClick={() => setActive(!active)}>
      {active ? "Thanks..." : "Press Me"}
    </button>
  );
};

const entries = [
  {
    id: 0,
    date: "090919",
    text: "first entry.",
    mood: "🧠😲"
  },
  {
    id: 1,
    date: "090919",
    text: "<i>Life: a miracle as a result of bunch of exceptions.</i>",
    mood: "🌀"
  },
  {
    id: 2,
    date: "090919",
    text: "William's Blake God",
    media:
      '<img src="https://www.colorado.edu/english/sites/default/files/styles/medium/public/article-image/800px-europe_a_prophecy_copy_d_object_1_bentley_1_erdman_i_keynes_i_british_museum.jpg?itok=6MYy17S_" />'
  },
  {
    id: 3,
    date: "9102019",
    text:
      "<p>Imagine 2 dots. A knife and a curve tying them together. 2 feet. One mind and a heart. Pointy geometric structures that make you bleed. Incapacity of eating. Headaches and anxiety. Turbulent wind from the East and difficulty to swim in an empty pool. Burned wood that makes coal.</p><p>Inside an echo chamber saturated with lies and deceits. In another place of existence there's water straight from The Mountain. No knifes and a strong dot-connecting string. No lies. Peaceful swimming.</p>",
    mood: "😖🤢✅☠️👋🐍",
    content: <Test />
  }
];

export default entries;
