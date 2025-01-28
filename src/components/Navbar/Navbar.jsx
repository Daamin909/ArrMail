import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import UserPlaceholder from "../../assets/userplaceholder.jpg";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const currentLocation = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link
          to={"/"}
          style={{ display: "flex", textDecoration: "none", color: "inherit" }}
        >
          <img src={Logo} alt="ArrMail Logo" className="logo" />
          <h1 className="app-name">ArrMail</h1>
          <p style={{ color: "inherit", fontSize: "25px" }}>™</p>
        </Link>
      </div>
      
      <div className="navbar-center">
        {currentLocation.pathname === "/mail" && (
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Search ArrMail"
              aria-label="Search ArrMail"
            />
          </div>
        )}
      </div>
      <div className="navbar-right">
        <button className="icon-button" aria-label="Settings">
          <FontAwesomeIcon icon={faCog} />
        </button>
        {/* <div className="profile-picture">
          <img src={UserPlaceholder} alt="Profile" />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
