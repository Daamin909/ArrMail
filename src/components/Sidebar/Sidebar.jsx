import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faInbox,
  faPaperPlane,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar({ addPopup }) {
  return (
    <aside className="sidebar">
      <button
        className="compose-button"
        aria-label="Compose"
        onClick={addPopup}
      >
        <FontAwesomeIcon icon={faPen} />
      </button>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item active" title="Inbox">
          <FontAwesomeIcon icon={faInbox} />
        </li>
        <li className="sidebar-menu-item" title="Sent Items">
          <FontAwesomeIcon icon={faPaperPlane} />
        </li>
        <li className="sidebar-menu-item" title="Bin">
          <FontAwesomeIcon icon={faTrash} />
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
