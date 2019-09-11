import React from "react";
import "./styles/App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Blog from "./screens/BlogScreen";
import Home from "./screens/HomeScreen";
import styled from "styled-components";

const Header = styled.h3`
  text-align: center;
`;

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Header>
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
              <Link to="/">Home</Link>
              <a href="https://github.com/asimonv">Github</a>
              <a href="https://www.dropbox.com/s/1swbqptibfcomhy/Resume.pdf?dl=0">
                Resume
              </a>
              <a href="https://medium.com/@11010110">Medium</a>
              <Link to="/blog">Blog</Link>
            </div>
          </Header>
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
