import React from "react";
import styled from "styled-components";

const QuoteWrapper = styled.div``;

const QuoteText = styled.p`
  fontsize: large;
`;

const QuoteAuthor = styled.p`
  text-align: right;
`;

const Quote = ({ content, title }) => {
  return (
    <QuoteWrapper>
      <QuoteText>{`“${content}”`}</QuoteText>
      <QuoteAuthor>{`—${title}.`}</QuoteAuthor>
    </QuoteWrapper>
  );
};

export default Quote;
