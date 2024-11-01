// src/App.js
import React, { useEffect, useState } from "react";
import { fetchQuote } from "./api"; // Import de la fonction d'API
import QuoteBox from "./components/QuoteBox";
import QuoteButton from "./components/QuoteButton";
import TweetButton from "./components/TweetButton";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const { quote, author } = await fetchQuote();
    setQuote(quote);
    setAuthor(author);
  };

  return (
    <div id="quote-box">
      <QuoteBox text={quote} author={author} />
      <QuoteButton fetchQuote={getQuote} />
      <TweetButton quote={quote} author={author} />
    </div>
  );
};

export default App;
