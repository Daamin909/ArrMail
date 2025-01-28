import React from "react";
import "./ActionPanel.css";

function ActionPanel() {
  return (
    <div className="action-panel">
      <button className="action-button">
        <i className="fas fa-sync-alt"></i>
        <span>Refresh</span>
      </button>
      <div className="action-dropdown">
        <button className="action-button">
          <i className="fas fa-filter"></i>
          <span>Filters</span>
        </button>
        {/* Add dropdown menu items here */}
      </div>
      <button className="action-button">
        <i className="fas fa-cog"></i>
        <span>Settings</span>
      </button>
    </div>
  );
}

export default ActionPanel;
