import React from "react";
import "./modal.css";

const Modal = ({ open, headline, onClose, modalText, children }) => {
  if (!open) return null;
  else
    return (
      <div className='modal-container'>
        <div className='modal'>
          <h2 className='modal-header'>{headline}</h2>
          <p className='modal-text'>{modalText}</p>
          {children}
          <button onClick={onClose} className='modal-btn-close'>
            close
          </button>
        </div>
      </div>
    );
};

export default Modal;
