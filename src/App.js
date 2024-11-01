import React from "react";
import QuoteBox from "./components/QuoteBox";
import QuoteButton from "./components/QuoteButton";
import TweetButton from "./components/TweetButton";

function App() {
  return (
    <div className="App">
      <QuoteBox />
      <QuoteButton />
      <TweetButton  />
    </div>
  );
}

export default App;
