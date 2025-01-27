import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Passkey from "../src/pages/passkey_landing_page";
import PasswordChecker from "../src/pages/password_checker";
import Generator from "../src/pages/Generator";

function App() {
  return (
    <Router>
      {/* Navbar is common for all routes */}
      <Navbar />
      <Routes>
        {/* Define routes for each page */}
        <Route path="/passkey_landing_page" element={<Passkey />} />
        <Route path="/password_checker" element={<PasswordChecker />} />
        <Route path="/Generator" element={<Generator />} />
        {/* Default route */}
        <Route path="*" element={<Passkey />} />
      </Routes>
    </Router>
  );
}

export default App;
