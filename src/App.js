import React from "react";
import "./styles/App.css";
import { Tweet } from "react-twitter-widgets";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h3>
          I'm Andre Simon from{" "}
          <span role="img" aria-label="Chile">
            🇨🇱
          </span>
          <span role="img" aria-label="Chili">
            🌶
          </span>{" "}
          and I study CS in the Pontifical Catholic University of Chile. Feel
          free to email me at <a href="mailto:aasimon@uc.cl">aasimon@uc.cl</a>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <a href="https://github.com/asimonv">Github</a>
            <a href="https://www.dropbox.com/s/1swbqptibfcomhy/Resume.pdf?dl=0">
              Resume
            </a>
            <a href="https://medium.com/@11010110">Medium</a>
          </div>
        </h3>
        <Tweet tweetId="1134228262517903360" />
      </div>
    </div>
  );
}

export default App;
