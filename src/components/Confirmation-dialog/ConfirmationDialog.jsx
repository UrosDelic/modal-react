import React from "react";
const ConfirmationDialog = ({ acceptText, declineText }) => {
  return (
    <div>
      <button className="accept-btn">{acceptText}</button>
      <button className="decline-btn">{declineText}</button>
    </div>
  );
};

export default ConfirmationDialog;
