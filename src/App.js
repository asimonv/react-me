import React from "react";
import "./App.css";
import { Tweet } from "react-twitter-widgets";

function App() {
  return (
    <div className="App">
      <div>
        <h3>
          I'm Andre Simon from{" "}
          <span role="img" aria-label="Chile">
            🇨🇱
          </span>
          <span role="img" aria-label="Chili">
            🌶
          </span>{" "}
          and I study CS in the Pontifical Catholic University of Chile. Sorry
          about the mess. Also, feel free to email me at{" "}
          <a href="mailto:aasimon@uc.cl">aasimon@uc.cl</a>.
        </h3>
        <Tweet tweetId="1134228262517903360" />
      </div>
    </div>
  );
}

export default App;
