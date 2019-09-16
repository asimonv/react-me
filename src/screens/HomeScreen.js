import React, { Fragment } from "react";
import styled from "styled-components";

const Header = styled.h3`
  text-align: center;

  & > a {
    margin: 0 5px;
  }
`;

const HomeScreen = props => (
  <Fragment>
    <Header>
      I'm Andre Simon from{" "}
      <span role="img" aria-label="Chile">
        🇨🇱
      </span>
      <span role="img" aria-label="Chili">
        🌶
      </span>{" "}
      I study CS @ Pontificia Universidad Católica de Chile. Feel free to email
      me at <a href="mailto:aasimon@uc.cl">aasimon@uc.cl</a>
    </Header>
    <p style={{ textAlign: "center" }}>
      <span role="img" aria-labelledby="ying-yang emoji">
        ☯️
      </span>
    </p>
  </Fragment>
);

export default HomeScreen;
