import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./ForgotPasswordPage.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to initiate the password reset process
    setMessage(
      `Password reset link sent to ${email}. Please check your inbox.`
    );
    setEmail("");
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h1>Forgot Password</h1>
        <p>Enter your email address to reset your password.</p>
        {message && <div className="message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="reset-button">
            Send Reset Link
          </button>
        </form>
        <div className="login-link">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
