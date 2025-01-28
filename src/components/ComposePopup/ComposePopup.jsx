import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faMinimize,
  faMaximize,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "./ComposePopup.css";

const ComposePopup = ({ id, onClose, onMinimize }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div className={`compose-popup ${isMaximized ? "maximized" : ""}`}>
      <div className="compose-header">
        <span>New Message</span>
        <div className="compose-actions">
          <button onClick={onMinimize}>
            <FontAwesomeIcon icon={faMinimize} />
          </button>
          <button onClick={toggleMaximize}>
            <FontAwesomeIcon icon={isMaximized ? faMinimize : faMaximize} />
          </button>
          <button onClick={() => onClose(id)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
      <div className="compose-body">
        <input type="text" placeholder="To" className="compose-input" />
        <input type="text" placeholder="Cc" className="compose-input" />
        <input type="text" placeholder="Subject" className="compose-input" />
        <div className="formatting-panel">
          {/* Add formatting buttons here */}
        </div>
        <textarea placeholder="" className="compose-content"></textarea>
      </div>
      <div className="compose-footer">
        <button className="send-button">
          <FontAwesomeIcon icon={faPaperPlane} />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default ComposePopup;
