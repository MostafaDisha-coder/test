import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard"; // Import the ProfileCard component
import "./Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">MyApp</Link>
      </div>

      <ul className="nav__links">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/services">Services</Link>
        </li>
      </ul>

      {/* Welcome User and Dropdown */}
      <div className="welcome-user" onClick={toggleDropdown}>
        <button className="btn2">Welcome, {sessionStorage.getItem("name") || "User"}</button>
        {showDropdown && (
          <ul className="dropdown-menu">
            <li>
              <Link to="/profile">Your Profile</Link>
            </li>
            <li>
              <Link to="/reports">Your Reports</Link> {/* Add "Your Reports" link */}
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        )}
      </div>

      {/* Render ProfileCard when on the /profile route */}
      <div>
        {window.location.pathname === "/profile" && <ProfileCard />}
      </div>
    </nav>
  );
};

export default Navbar;