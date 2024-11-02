// src/App.js
import React, { useCallback, useEffect, useState } from "react";
import { fetchQuote } from "./api"; // Import de la fonction d'API
import QuoteBox from "./components/QuoteBox";
import QuoteButton from "./components/QuoteButton";
import TweetButton from "./components/TweetButton";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const changeBackgroundColor = useCallback(() => {
    const randomColor1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    const randomColor2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    const shadowX = Math.floor(Math.random() * 100) - 50; // Mouvement horizontal aléatoire
    const shadowY = Math.floor(Math.random() * 200) - 100; // Mouvement vertical aléatoire
    const blurRadius = Math.floor(Math.random() * 200) + 100; // Taille du flou aléatoire

    document.body.style.backgroundColor = randomColor1;
    document.body.style.boxShadow = `inset ${shadowX}px ${shadowY}px ${blurRadius}px ${-50}px ${randomColor2}`;
  }, []); // pas de dépendances ici

  const getQuote = useCallback(async () => {
    const { quote, author } = await fetchQuote();
    setQuote(quote);
    setAuthor(author);
    changeBackgroundColor();
  }, [changeBackgroundColor]); //

  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <div id="quote-box">
      <QuoteBox text={quote} author={author} />
      <div id="buttons-container">
        <QuoteButton fetchQuote={getQuote} />
        <TweetButton quote={quote} author={author} />
      </div>
    </div>
  );
};

export default App;
