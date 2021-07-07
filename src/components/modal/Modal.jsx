import React from "react";
import "./modal.css";

const Modal = ({ title, open, close, children }) => {
  if (!open) return null;
  else
    return (
      <div className='modal-container' onClick={close}>
        <div
          className='modal'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span onClick={close} className='modal-btn-close'>
            x
          </span>
          <p className='modal-title'>{title}</p>
          <div className='x-close-container'></div>

          {children}
        </div>
      </div>
    );
};

export default Modal;
