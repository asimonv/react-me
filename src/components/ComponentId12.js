import React, { Fragment } from "react";
import MessageText from "./MessageText";
import styled from "styled-components";

const MessageTitle = styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

const TitleText = styled.p`
  font-weight: 700;
  font-size: small;
  color: gray;
  margin: 0px;
`;

const ComponentId12 = () => {
  return (
    <Fragment>
      <p>Not far away...</p>
      <div
        style={{
          margin: "50px 0px",
          width: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <MessageTitle>
          <TitleText>iMessage</TitleText>
          <TitleText>
            Today <span>06:18 PM</span>
          </TitleText>
        </MessageTitle>
        <MessageText mine>The water is rising somewhere</MessageText>
        <MessageText other>{"Not anymore. Not for me. It's over."}</MessageText>
        <MessageText other>Oh and one more thing: I'm on Tinder.</MessageText>
      </div>
    </Fragment>
  );
};

export default ComponentId12;
