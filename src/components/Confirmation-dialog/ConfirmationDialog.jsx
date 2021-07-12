import React from "react";

const ConfirmationDialog = ({
  acceptAction,
  declineAction,
  acceptText,
  declineText,
  dialogText,
}) => {
  return (
    <div>
      {dialogText && <h4 className='dialog-text'>{dialogText}</h4>}
      <button onClick={acceptAction} className='accept-btn'>
        {acceptText}
      </button>
      <button onClick={declineAction} className='decline-btn'>
        {declineText}
      </button>
    </div>
  );
};

export default ConfirmationDialog;
