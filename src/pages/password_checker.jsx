import React from "react";
import "../style/password-checker.css";

const PasskeyAppChecker = () => {
  const countAndDisplay = () => {
    //password checking logic
    const passInput = document.getElementById("pass").value;
    const resultElement = document.getElementById("result");
    if (passInput.length < 8) {
      resultElement.textContent = "Password is too short!";
    } else {
      resultElement.textContent = "Password looks strong!";
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
          <input type="text" placeholder="Enter your password" id="pass" />
          <button className="mit" onClick={countAndDisplay}>
            Submit
          </button>
        </div>
        <span id="result" className="out"></span>
      </div>
    </div>
  );
};

export default PasskeyAppChecker;
