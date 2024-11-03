import React from "react";

const QuoteButton = ({ fetchQuote,isLoading  }) => {
  return (
    <button id="new-quote" onClick={fetchQuote}>
       {isLoading ? "Patientez..." : "Nouvelle Citation"}
    </button>
  );
};

export default QuoteButton;
