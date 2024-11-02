import React from "react";

const TweetButton = ({ quote, author }) => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`;

  return (
    <a
      id="tweet-quote"
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Tweet Quote
    </a>
  );
};

export default TweetButton;
