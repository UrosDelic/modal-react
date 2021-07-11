import React from "react";

const ConfirmationDialog = ({ acceptText, declineText, dialogText }) => {
  return (
    <div>
      {dialogText && <h4 className="dialog-text">{dialogText}</h4>}
      <button className="accept-btn">{acceptText}</button>
      <button className="decline-btn">{declineText}</button>
    </div>
  );
};

export default ConfirmationDialog;
