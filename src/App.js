import React, { useState } from "react";
import "./styles/App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Blog from "./screens/BlogScreen";
import Home from "./screens/HomeScreen";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: NYTCheltenham;
    src: url('./assets/fonts/nyt.ttf') format('truetype'),
         url('./assets/fonts/nyt-webfont.woff') format('woff'),
         url('./assets/fonts/nyt-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;

}
`;

const Header = styled.h3`
  text-align: center;

  & > a {
    margin: 0 5px;
  }
`;

const LinksWrapper = styled.div`
  font-size: large;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > a {
    margin: 0 5px;
  }
`;

const App = () => {
  const [blog, setBlog] = useState(false);

  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <div className="content">
          {!blog && (
            <Header>
              I'm Andre Simon from{" "}
              <span role="img" aria-label="Chile">
                🇨🇱
              </span>
              <span role="img" aria-label="Chili">
                🌶
              </span>{" "}
              and I study CS in the Pontifical Catholic University of Chile.
              Feel free to email me at{" "}
              <a href="mailto:aasimon@uc.cl">aasimon@uc.cl</a>
            </Header>
          )}

          <LinksWrapper>
            <Link onClick={() => setBlog(false)} to="/">
              Home
            </Link>
            <a href="https://github.com/asimonv">Github</a>
            <a href="https://www.dropbox.com/s/1swbqptibfcomhy/Resume.pdf?dl=0">
              Resume
            </a>
            <a href="https://medium.com/@11010110">Medium</a>
            <Link onClick={() => setBlog(true)} to="/blog">
              Blog
            </Link>
          </LinksWrapper>
        </div>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
        </div>
      </div>
    </Router>
  );
};

export default App;
