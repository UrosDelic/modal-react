import React from "react";
import Modal from "../modal/Modal";

const ConfirmationDialog = ({
  acceptAction,
  declineAction,
  acceptText,
  declineText,
  dialogText,
  close,
  children,
}) => {
  return (
    <Modal preventClosingOutside removeCloseButton>
      <div>
        {dialogText && <h4 className='dialog-text'>{dialogText}</h4>}
        <button onClick={acceptAction} className='accept-btn'>
          {acceptText}
        </button>
        <button onClick={declineAction} className='decline-btn'>
          {declineText}
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
