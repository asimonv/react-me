import React from "react";
import "./styles/App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Blog from "./screens/BlogScreen";
import Home from "./screens/HomeScreen";
import Work from "./screens/WorkScreen";
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

const LinksWrapper = styled.div`
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > a {
    margin: 0 5px;
  }
`;

const App = () => (
  <Router>
    <div className="App">
      <GlobalStyles />
      <div className="content">
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <a href="https://github.com/asimonv">Github</a>
          <a href="https://www.dropbox.com/s/1swbqptibfcomhy/Resume.pdf?dl=0">
            Resume
          </a>
          <a href="https://medium.com/@11010110">Medium</a>
          <Link to="/blog">Blog</Link>
        </LinksWrapper>
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/blog" component={Blog} />
      </div>
    </div>
  </Router>
);

export default App;
