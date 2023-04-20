import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [quotes, setQuotes] = useState('');
  const textRef = useRef();

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
          let randomNumber = Math.floor(Math.random() * data.length);
          setQuotes(data[randomNumber]);
        });
  }

  useEffect(() => {
      getQuotes();
  }, []);

  return (
    <div className="App">
        <div className="quotes">
            <p ref={textRef}>{quotes.text}</p>
            <p>Author: {quotes.author}</p>
            <div className="button-container">
                <button onClick={getQuotes} className="button">Get quote</button>
                <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} target="_blank" rel="noopener noreferrer" className="button">Tweet</a>
            </div>
        </div>
    </div>
  );
}

export default App;