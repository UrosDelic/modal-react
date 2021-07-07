import React from "react";
import "./modal.css";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  else
    return (
      <div className='modal-container' onClick={onClose}>
        <div
          className='modal'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
          <button onClick={onClose} className='modal-btn-close'>
            close
          </button>
        </div>
      </div>
    );
};

export default Modal;
