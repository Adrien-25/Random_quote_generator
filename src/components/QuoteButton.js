import React from "react";

const QuoteButton = ({ fetchQuote }) => {
  return (
    <button id="new-quote" onClick={fetchQuote}>
      New Quote
    </button>
  );
};

export default QuoteButton;
