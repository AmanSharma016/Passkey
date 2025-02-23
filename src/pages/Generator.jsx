import React, { useState } from "react";
import "../style/generator.css";

const PasswordGenerator = () => {
  const [includeCapitalLetters, setIncludeCapitalLetters] = useState(false);
  const [includeSmallLetters, setIncludeSmallLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [passwordLength, setPasswordLength] = useState(5);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let characters = "";
    if (includeCapitalLetters) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeSmallLetters) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSpecialChars) characters += "@$*&!";

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="container3">
      <div className="box1">
        <div>
          <h1 className="head">Generate Your Password</h1>
          <p className="content">
            A strong and secure password consists of capital and small alphabets, numeric values, and some special characters.
            <br />
            (WARNING: SOME WEBSITES DON'T ACCEPT THESE SPECIAL CHARACTERS IN THEIR PASSWORD POLICY).
          </p>
          <div className="subhead">
            <p>
              Include Capital Letters:
              <input
                type="checkbox"
                className="chbox"
                checked={includeCapitalLetters}
                onChange={(e) => setIncludeCapitalLetters(e.target.checked)}
              />
            </p>
            <p>
              Include Small Letters:
              <input
                type="checkbox"
                className="chbox"
                checked={includeSmallLetters}
                onChange={(e) => setIncludeSmallLetters(e.target.checked)}
              />
            </p>
            <p>
              Include Numbers:
              <input
                type="checkbox"
                className="chbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
            </p>
            <p>
              Include Special Characters:
              <input
                type="checkbox"
                className="chbox"
                checked={includeSpecialChars}
                onChange={(e) => setIncludeSpecialChars(e.target.checked)}
              />
            </p>
            <p>
              Password Length:
              <input
                type="number"
                id="passwordLength"
                value={passwordLength}
                min="5"
                max="20"
                onChange={(e) => setPasswordLength(Number(e.target.value))}
              />
            </p>
            <button className="btn" onClick={generatePassword}>
              Generate Password
            </button>
          </div>
          <div>
            <span id="password">{password}</span>
            {password && (
              <button className="btn1" onClick={copyToClipboard}>
                Copy
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
