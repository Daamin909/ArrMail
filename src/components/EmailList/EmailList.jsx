import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faFilter } from "@fortawesome/free-solid-svg-icons";
import "./EmailList.css";
import SingleEmail from "./SingleEmail/SingleEmail";

const EmailList = () => {
  const emails = [
    {
      id: 1,
      sender: "Daamin Ashai",
      subject:
        "I am the main character. I'm him. I'm the one. I'm the protagonist.",
      time: "Today",
    },
    {
      id: 2,
      sender: "Barack Obama",
      subject:
        "I am the president of USA and I like to play basketball with little humans.",
      time: "Yesterday",
    },
    {
      id: 3,
      sender: "Balwinder Kaur Singh Pahwa",
      subject: "About the meeting with the client at 2 PM",
      time: "Dec 8",
    },
    {
      id: 4,
      sender: "Daenerys Targaryen",
      subject: "I am the mother of dragons",
      time: "Dec 7",
    },
    {
      id: 5,
      sender: "Jon Snow",
      subject: "I know nothing",
      time: "Dec 6",
    },
    {
      id: 6,
      sender: "Tyrion Lannister",
      subject: "I drink and I know things",
      time: "Dec 5",
    },
    {
      id: 7,
      sender: "Daamin Ashai",
      subject:
        "I am the main character. I'm him. I'm the one. I'm the protagonist.",
      time: "Today",
    },
  ];
  return (
    <div className="email-list-container">
      <div className="email-list-actions">
        <button className="action-button" aria-label="Refresh">
          <FontAwesomeIcon icon={faSync} />
        </button>
        <button className="action-button" aria-label="Filters">
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
      <div className="email-list">
        {emails.map((email) => (
          <SingleEmail key={email.id} email={email} />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
