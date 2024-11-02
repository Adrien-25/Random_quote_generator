import React from "react";

const QuoteBox = ({ text, author }) => {
  return (
     <>
      <p id="text">{text}</p>
      <p id="author">- {author}</p>
     </>
  );
};

export default QuoteBox;
