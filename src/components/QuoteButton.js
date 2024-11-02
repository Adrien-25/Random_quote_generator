import React from "react";

const QuoteButton = ({ fetchQuote }) => {
  return (
    <button id="new-quote" onClick={fetchQuote}>
      Nouvelle citation
    </button>
  );
};

export default QuoteButton;
