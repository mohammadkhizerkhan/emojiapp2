import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "đ": "smiling",
  "đŗ": "disbelief",
  "đ": "sad",
  "đĨĄ": "takeout box",
  "â¤ī¸": "love",
  "đ": "annoyance",
  "đ": " Pensive Face",
  "đĒ": " Sleepy Face",
  "đ¤": "Zipper-Mouth Face",
  "đ¤": "Hugging Face",
  "đ": " miling Face with Horns",
  "âšī¸": " Frowning Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else if (userInput === "") {
      setMeaning("");
    } else {
      setMeaning("That's a new one! We don't have it in our database");
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
