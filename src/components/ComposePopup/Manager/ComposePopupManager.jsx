import React from "react";
import ComposePopup from "./../ComposePopup";
import "./ComposePopupManager.css";

const ComposePopupManager = ({
  addPopup,
  popups,
  setPopups,
  minimizedPopups,
  setMinimizedPopups,
}) => {
  const closePopup = (id) => {
    setPopups(popups.filter((popup) => popup.id !== id));
    setMinimizedPopups(minimizedPopups.filter((popup) => popup.id !== id));
  };

  const minimizePopup = (id) => {
    const popupToMinimize = popups.find((popup) => popup.id === id);
    if (popupToMinimize) {
      setPopups(popups.filter((popup) => popup.id !== id));
      setMinimizedPopups([...minimizedPopups, popupToMinimize]);
    }
  };

  const maximizePopup = (id) => {
    const popupToMaximize = minimizedPopups.find((popup) => popup.id === id);
    if (popupToMaximize) {
      setMinimizedPopups(minimizedPopups.filter((popup) => popup.id !== id));
      setPopups([...popups, popupToMaximize]);
    }
  };

  return (
    <>
      <div className="compose-popups">
        {popups.map((popup) => (
          <ComposePopup
            key={popup.id}
            id={popup.id}
            onClose={closePopup}
            onMinimize={() => minimizePopup(popup.id)}
          />
        ))}
      </div>
      <div className="minimized-popups">
        {minimizedPopups.map((popup) => (
          <button
            key={popup.id}
            className="minimized-popup"
            onClick={() => maximizePopup(popup.id)}
          >
            New Message
          </button>
        ))}
      </div>
    </>
  );
};

export default ComposePopupManager;
