import React from "react";
import StyledText from "../components/StyledText";
import Test from "../components/Test-id3";
import ComponentId7 from "../components/ComponentId7";
import ComponentId8 from "../components/ComponentId8";
import ComponentId9 from "../components/ComponentId9";
import ComponentId10 from "../components/ComponentId10";
import ComponentId12 from "../components/ComponentId12";

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
    text: "<i>Life: a miracle as a result of a bunch of exceptions.</i>",
    mood: "🌀"
  },
  {
    id: 3,
    date: "9102019",
    text:
      "<p>Imagine 2 dots. A knife and a curve tying them together. 2 feet. One mind and a heart. Pointy geometric structures that make you bleed. Incapacity of eating. Headaches and anxiety. Turbulent wind from the East and difficulty to swim in an empty pool. Burned wood that makes coal.</p><p>Inside an echo chamber saturated with lies and deceits. In another place of existence there's water straight from The Mountain. No knifes and a strong dot-connecting string. No lies. Peaceful swimming.</p>",
    mood: "😖🤢✅☠️👋🐍",
    content: <Test />
  },
  {
    id: 4,
    date: "9102019",
    mood: "😡",
    content: (
      <StyledText striked="line-through">
        Not a mirror. Not a validator. A separate soul, independent, without
        external interference. No standards. Not a mirror. A human being, not a
        tool.
      </StyledText>
    )
  },
  {
    id: 5,
    date: "9102019",
    mood: "🐍🐛👤",
    content:
      "A bug inside a tornado. No body, no mind inside. A souless bug without a clue takes the subway everyday to die again and again. Black waters to wake it up. No food, no eating, no living. Alive."
  },
  {
    id: 6,
    date: "9102019",
    mood: "🛑🤧🎣🐟🐠🐡",
    content:
      "Fishing for fishing. No meaning, no feelings, no nothing. A lion in a coma. Praying for a miracle. Trial and error, error, error, error, error, error, error, error, error, error, error, error, error, error, error, error, error, error, error, error, error. Trial."
  },
  {
    id: 7,
    date: "110919",
    mood: "🤔❓",
    content: <ComponentId7 />
  },
  {
    id: 8,
    date: "110919",
    mood: "😊💗👍",
    content: <ComponentId8 />
  },
  {
    id: 9,
    date: "120919",
    mood: "☕️⏳😵🧠",
    content: <ComponentId9 />
  },
  {
    id: 10,
    date: "120919",
    mood: "😡",
    content:
      "Confusing being empowered with throwing arrows and stabbing knives."
  },
  {
    id: 11,
    date: "130919",
    mood: "😱",
    content: <ComponentId10 />
  },
  {
    id: 12,
    date: "130919",
    mood: "😔",
    content: <ComponentId12 />
  }
];

export default entries;
