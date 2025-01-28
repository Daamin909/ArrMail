import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faMailForward } from "@fortawesome/free-solid-svg-icons";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div className="email-toolbar">
      <button className="toolbar-button" aria-label="Reply">
        <FontAwesomeIcon icon={faReply} />
        <span>Reply</span>
      </button>
      <button className="toolbar-button" aria-label="Forward">
        <FontAwesomeIcon icon={faMailForward} />
        <span>Forward</span>
      </button>
    </div>
  );
};

export default Toolbar;
