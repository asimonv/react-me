// svg made with https://vectr.com/

import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Wrapper = styled(animated.div)`
  clip-path: url(#a4cLMdfhgf);
`;

const ComponentId7 = () => {
  const props = useSpring({
    to: [
      { opacity: 1, backgroundColor: "#4183d7" },
      { opacity: 1, backgroundColor: "#6bb9f0" },
      { opacity: 1, backgroundColor: "black" }
    ],
    from: { opacity: 0, backgroundColor: "#e4f1fe" },
    config: { duration: 2500 }
  });

  return (
    <Fragment>
      <p>
        The ocean, the sky. Eyes openned. Without a doubt a great moment.
        Suddenly, all goes to black and there you are: <i>alone</i>. Void,
        coldness, infiniteness.
      </p>
      <svg width={0} height={0}>
        <clipPath
          viewBox="129.70814655104775 77.62849126181774 214.96549982273356 176.23891085139056"
          width="210.97"
          height="172.24"
          id="a4cLMdfhgf"
        >
          <path d="M54.51 143.51C76.94 166.36 109.29 176.51 140.75 170.58C156.67 167.57 142.31 170.28 155.29 167.83C191.55 160.99 215.83 126.59 210.14 90.13C207.77 74.94 207.79 75.04 204.64 54.91C200.87 30.72 181.68 11.89 157.43 8.56C141.73 6.41 118.79 3.27 98.92 0.55C85.98 -1.22 72.81 1.33 61.46 7.81C48.94 14.97 24.78 28.78 11.23 36.52C3.69 40.83 -0.66 49.12 0.09 57.78C0.66 64.42 0.64 64.17 1.08 69.32C2.29 83.33 8.34 96.48 18.18 106.51C32.63 121.22 44.2 133.01 54.51 143.51Z"></path>
        </clipPath>
      </svg>
      <Wrapper style={{ ...props, height: "200px" }}></Wrapper>
    </Fragment>
  );
};

export default ComponentId7;
