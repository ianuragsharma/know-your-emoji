import React, { useState } from "react";
import "./styles.css";
const emojipack = {
  "😂": "Extreme happiness or laughter",
  "❤️": "Love (red by default, but meaning is same for any color)",
  "😍": "Love or adoration",
  "🤣": "Intense or hysterical laughter",
  "😊": "Positive or happy",
  "🙏": "Prayer, thank you, and sometimes a high five",
  "💕": "Romance or love is in the air",
  "😭": "Uncontrollable tears, perhaps due to sadness or joy",
  "😘": "Kissing someone, or general expression of love",
  "👍": "Well done, good job, or approval"
};
const emojis = Object.keys(emojipack);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Top 10 Emojis");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojipack) {
      setMeaning(emojipack[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }
  function emojiClickHandler(inputEmoji) {
    setMeaning(emojipack[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>Know Your Emoji</h1>
      <input
        onChange={changeHandler}
        placeholder="Type your emoji here"
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h3>{meaning}</h3>

      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
