import React from "react";
import "./modal.css";

const Modal = ({ title, close, children }) => {
  return (
    <div className='modal-container' onClick={close}>
      <div
        className='modal'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='x-close-container'>
          <span onClick={close} className='modal-btn-close'>
            x
          </span>
        </div>
        <div className='modal-items'>
          <p className='modal-title'>{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
