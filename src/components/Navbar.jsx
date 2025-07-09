// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from "../assets/Cooksy_logo.png";
import './Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const handleLogout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Cooksy Logo" />
        <span>Cooksy</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {isLoggedIn && (
          <>
            <li><Link to="/createrecipe">Create Recipe</Link></li>
            <li><Link to="/savedrecipe">Saved Recipes</Link></li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;