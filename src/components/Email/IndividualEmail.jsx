import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTrash,
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./IndividualEmail.css";
import IndividualEmailSkeleton from "./IndividualEmailSkeleton";
import ShipLoader from "./../ShipLoader/ShipLoader";
import Toolbar from "./Toolbar/Toolbar";
const IndividualEmail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [isRead, setIsRead] = useState(true);
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  useEffect(() => {
    const fetchEmail = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              id,
              subject: "Important Project Update",
              senderEmail: "john.doe@example.com",
              senderName: "John Doe",
              senderPfp: "https://picsum.photos/id/237/200/300",
              content:
                "Hello,\n\nI hope this email finds you well. I wanted to provide you with an important update regarding our ongoing project.\n\nBest regards,\nJohn",
              timestamp: new Date().toISOString(),
            }),
          500
        )
      );
      setEmail(response);
    };

    fetchEmail();
  }, [id]);

  const handleBack = () => {
    navigate("/mail");
  };

  const handleDelete = () => {
    console.log("Delete email:", id);
  };

  const toggleReadStatus = () => {
    setIsRead(!isRead);
  };

  return (
    <div className="individual-email-container">
      <div className="email-list-actions">
        <button
          className="action-button"
          onClick={handleBack}
          aria-label="Back"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="action-button"
          onClick={handleDelete}
          aria-label="Delete"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          className="action-button"
          onClick={toggleReadStatus}
          aria-label={isRead ? "Mark as unread" : "Mark as read"}
        >
          <FontAwesomeIcon icon={isRead ? faEnvelopeOpen : faEnvelope} />
        </button>
      </div>
      {email && (
        <>
          <div className="individual-email-content">
            <h1 className="individual-email-subject">{email.subject}</h1>
            <div className="individual-email-info">
              <div className="individual-email-sender">
                <img
                  src={email.senderPfp}
                  alt={email.senderName}
                  className="sender-pfp"
                />
                <div className="sender-info">
                  <div className="sender-name">{email.senderName}</div>
                  <div className="sender-email">{email.senderEmail}</div>
                </div>
              </div>
              <div className="individual-email-timestamp">
                {new Intl.DateTimeFormat("en-GB", options).format(
                  new Date(email.timestamp)
                )}
              </div>
            </div>
            <div className="individual-email-body">{email.content}</div>
            <div className="individual-email-responses">
              <Toolbar />
            </div>
          </div>
        </>
      )}
      {!email && (
        <div className="individual-email-content">
          <IndividualEmailSkeleton
            classStyle={"individual-email-subject"}
            widthStyle={"40%"}
            heightStyle={"6%"}
          />
          <IndividualEmailSkeleton
            classStyle={"individual-email-info"}
            widthStyle={"60%"}
            heightStyle={"5%"}
          />
          <IndividualEmailSkeleton
            classStyle={"individual-email-body-skeleton"}
            widthStyle={"100%"}
            heightStyle={"80%"}
          />
        </div>
      )}
    </div>
  );
};

export default IndividualEmail;
