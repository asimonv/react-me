import React from "react";
import "./styles/App.css";
import { Tweet } from "react-twitter-widgets";
import github from "./assets/images/github.png";
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
            <a href="https://github.com/asimonv">
              <img
                style={{ width: 20, height: 20 }}
                src={github}
                alt="github-logo"
              />
            </a>
            <a href="https://www.dropbox.com/s/1swbqptibfcomhy/Resume.pdf?dl=0">
              Resume
            </a>
          </div>
        </h3>
        <Tweet tweetId="1134228262517903360" />
      </div>
    </div>
  );
}

export default App;
