import React, { useState } from "react";
import Sound from "react-sound";
import styled from "styled-components";
import Image from "./Image";
import { useSpring, animated } from "react-spring";
import { easeExpIn } from "d3-ease";

const Wrapper = styled.div`
  margin: 10px 0;
`;

const ComponentId10 = () => {
  const aria = "A square";
  const audioURL = `${process.env.PUBLIC_URL}/audio/laura.mp3`;
  const amount = parseInt(1 / 0.01, 10);
  const max = 40;
  const min = -40;
  const shakeFactor = 3;
  const playbackRate = 2;
  const [isActive, setIsActive] = useState(false);

  const _onClick = () => {
    setIsActive(!isActive);
    toggle(!state);
  };

  const [state, toggle] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 26697.143 / playbackRate, easing: easeExpIn }
  });

  return (
    <Wrapper>
      {isActive && (
        <Sound
          url={audioURL}
          playStatus={Sound.status.PLAYING}
          playbackRate={playbackRate}
          onFinishedPlaying={() => {
            console.log("finished");
          }}
        />
      )}
      <p>"Where the rose water passes and dry river flows"</p>
      <div onClick={_onClick}>
        <animated.div
          style={{
            cursor: "help",
            transform: x
              .interpolate({
                range: [...new Array(amount), 1].map((x, i) => i * 0.01),
                output: [...new Array(amount), 0].map((x, i) =>
                  i === amount
                    ? 0
                    : (Math.random() * (max - min) + min) *
                      (i / amount) *
                      shakeFactor
                )
              })
              .interpolate(
                x =>
                  `translate3d(${x}px, ${
                    x === 0
                      ? x
                      : (Math.random() * (1 - -1) + -1) *
                        Math.pow(shakeFactor, 3)
                  }px, 0)`
              )
          }}
        >
          <Image
            url={`${process.env.PUBLIC_URL}/images/cropped-square.png`}
            labelledby={aria}
            alt={aria}
          />
        </animated.div>
      </div>
    </Wrapper>
  );
};

export default ComponentId10;
