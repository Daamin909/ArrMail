import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.css";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login to ArrMail</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-options">
          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
          <Link to="/signup" className="signup-link">
            New to ArrMail?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
