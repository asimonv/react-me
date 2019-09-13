import styled from "styled-components";

const MessageText = styled.p`
  font-family: "Helvetica Neue";
  max-width: 255px;
  word-wrap: break-word;
  margin-bottom: 12px;
  line-height: 24px;
  position: relative;
  padding: 10px 20px;
  border-radius: 25px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    height: 20px;
  }

  ${props =>
    props.mine &&
    `
    color: white;
    background: #0b93f6;
    align-self: flex-end;

    &:before {
      right: -7px;
      border-right: 20px solid #0b93f6;
      border-bottom-left-radius: 16px 14px;
      transform: translate(0, -2px);
    }

    &:after {
      right: -56px;
      width: 26px;
      background: white;
      border-bottom-left-radius: 10px;
      transform: translate(-30px, -2px);
    }
  `}
  ${props =>
    props.other &&
    `
    background: #e5e5ea;
    color: black;
    align-self: flex-start;

    &:before {
      left: -7px;
      border-left: 20px solid #e5e5ea;
      border-bottom-right-radius: 16px 14px;
      transform: translate(0, -2px);
    }

    &:after {
      left: 4px;
      width: 26px;
      background: white;
      border-bottom-right-radius: 10px;
      transform: translate(-30px, -2px);
    }
  `}
`;

export default MessageText;
