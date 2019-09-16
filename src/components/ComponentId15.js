import React, { Fragment, useState, useEffect } from "react";
import StyledText from "./StyledText";

const ComponentId15 = props => {
  const diff = Math.round((new Date() - new Date(2019, 3, 6)) / 1000);
  const [seconds, setSeconds] = useState(diff);
  const [toggled, setToggled] = useState(false);
  const frameURL = `${process.env.PUBLIC_URL}/images/frame.png`;
  const paintingURL = `${process.env.PUBLIC_URL}/images/painting.jpg`;

  const _onClick = () => {
    setToggled(!toggled);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <Fragment>
      <p>
        Everytime I see a painting I remember the weird fact that they hide some
        deeper meaning which reminds me about how much time have passed since
        that Wednesday: seconds. Tap the painting to understand (I guess??).
      </p>
      <div onClick={_onClick} style={{ cursor: "help" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1d1511",
            flexDirection: "column",
            marginBottom: "10px"
          }}
        >
          {toggled ? (
            <Fragment>
              <StyledText
                striked="line-through"
                position="absolute"
                color="white"
              >
                {seconds}
              </StyledText>
              <img style={{ width: "100%" }} src={frameURL} alt="frame" />
            </Fragment>
          ) : (
            <img style={{ width: "100%" }} src={paintingURL} alt="frame" />
          )}
        </div>
      </div>
      <a href="https://en.wikipedia.org/wiki/Berthe_Morisot_with_a_Bouquet_of_Violets">
        Édouard Manet - Berthe Morisot au bouquet de violettes (1872)
      </a>
    </Fragment>
  );
};

export default ComponentId15;
