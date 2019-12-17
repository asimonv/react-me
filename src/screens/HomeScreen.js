import React from "react";
import styled from "styled-components";

const Header = styled.h3`
  text-align: center;

  & > a {
    margin: 0 5px;
  }
`;

const HomeScreen = props => {
  React.useEffect(() => {
    document.title = "Andre Simon | Home ";
  }, []);
  return (
    <div className="content">
      <Header>
        Hi there!{" "}
        <span role="img" aria-label="hand waving emoji">
          👋
        </span>
        <p>
          CS @ Pontificia Universidad Católica de Chile. Feel free to email me
          at <a href="mailto:aasimon@uc.cl">aasimon@uc.cl</a>
        </p>
      </Header>
    </div>
  );
};

export default HomeScreen;
