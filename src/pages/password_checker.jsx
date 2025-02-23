import React, { useState } from "react";
import "../style/password-checker.css";

const PasskeyAppChecker = () => {
  const [text, setText] = useState(""); // State for input field
  const [resultText, setResultText] = useState(""); // State for result text

  const countAndDisplay = () => {
    if (text.trim().length < 8) {
      setResultText("Password is too short!");
    } else {
      setResultText("Password looks strong!");
    }
  };

  return (
    <div className="container2">
      <div className="box1">
        <div className="content">
          <h1 className="head">Check Your Password</h1>
          <p>
            In today's era a strong password is very necessary. Following are some of the rules to
            create a strong password or you can generate some strong and unpredictable password which
            will take ages to get hacked.
          </p>
          <br />
          <p>
            <ul>
              <li>Use capital letters</li>
              <li>Use small letters</li>
              <li>Use numeric values</li>
              <li>Use special characters</li>
            </ul>
          </p>
        </div>
        <div className="res">
          <input 
            type="text" 
            placeholder="Enter your password" 
            id="pass" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
          />
          <button className="mit" onClick={countAndDisplay}>
            Submit
          </button>
        </div>

        {/* Hide the span when there's no resultText */}
        {resultText && <span id="result" className="out">{resultText}</span>}
      </div>
    </div>
  );
};

export default PasskeyAppChecker;
