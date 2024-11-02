import React from "react";

const QuoteBox = ({ text, author }) => {
  return (
    <div>
      <p id="text">{text}</p>
      <p id="author">{author}</p>
    </div>
  );
};

export default QuoteBox;
