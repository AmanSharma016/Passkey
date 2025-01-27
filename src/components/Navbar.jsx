import React from "react";
import { NavLink } from "react-router-dom"; 
import "../style/Navbar-style.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Passkey</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/passkey_landing_page" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/password_checker" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Password Checker
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Generator" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Password Generator
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
