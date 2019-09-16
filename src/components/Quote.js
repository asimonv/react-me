import React from "react";
import styled from "styled-components";

const QuoteWrapper = styled.div``;

const QuoteText = styled.p`
  font-size: large;
`;

const QuoteAuthor = styled.p`
  text-align: right;
  margin-right: 10px;
`;

const Quote = ({ content, title }) => {
  return (
    <QuoteWrapper>
      {content && <QuoteText>{`“${content}”`}</QuoteText>}
      {title && <QuoteAuthor>{`—${title}`}</QuoteAuthor>}
    </QuoteWrapper>
  );
};

export default Quote;
