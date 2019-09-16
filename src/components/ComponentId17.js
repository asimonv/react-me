import React, { useState } from "react";
import Sound from "react-sound";
import { useSpring, animated } from "react-spring";

const ComponentId17 = () => {
  const audioURL = `${process.env.PUBLIC_URL}/audio/wind.mp3`;
  const [isPlaying, setIsPlaying] = useState(true);
  const playbackRate = 2;
  const duration = 41351 / playbackRate;
  const _onClick = () => {
    setIsPlaying(!isPlaying);
  };
  const props = useSpring({
    backgroundColor: "black",
    from: { backgroundColor: "white" },
    config: { duration },
    padding: 40
  });
  const textProps = useSpring({
    color: "white",
    from: { color: "black" },
    config: { duration }
  });

  return (
    <animated.div onClick={_onClick} style={props}>
      <animated.p style={textProps}>
        It's sad. Just a couple of taps away. Can't do anything. So disconnected
        and so into getting so far away from each other in the quickest way
        possible. Trying so hard to not being intertwined anymore. I didn't
        forget what day it is, yet I had to gave my mouth away. Looking for
        someone else to say what I feel for someone else. Doors closed and tail
        between legs. A fast food analogy of feelings.
      </animated.p>
      <animated.p style={textProps}>
        Another turn of the Sun and yet here we are: in complete darkness thanks
        to some words that we might or might not have said.
      </animated.p>
      <animated.p style={textProps}>
        It's not visibly raining, but you don't need eyes to see what's really
        going on.
      </animated.p>
      {isPlaying && (
        <Sound
          url={audioURL}
          playStatus={Sound.status.PLAYING}
          playbackRate={playbackRate}
          loop
        />
      )}
    </animated.div>
  );
};

export default ComponentId17;
