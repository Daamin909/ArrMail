import React from "react";
import { Link } from "react-router-dom";

const SingleEmail = ({ email }) => {
  return (
    <div key={email.id} className="email-item">
      <input type="checkbox" className="email-checkbox" />
      <Link
        to={`/mail/${email.id}`}
        style={{
          display: "flex",
          textDecoration: "none",
          color: "inherit",
          width: "100%",
        }}
      >
        <div className="email-content">
          <div className="email-sender">{email.sender}</div>
          <div className="email-subject">{email.subject}</div>
        </div>
        <div className="email-time">{email.time}</div>
      </Link>
    </div>
  );
};

export default SingleEmail;
