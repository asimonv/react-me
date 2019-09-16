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
  </Fragment>
);

export default HomeScreen;
