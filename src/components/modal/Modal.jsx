import React from "react";
import "./modal.css";

const Modal = ({ title, close, children, closeOutside }) => {
  return (
    <div className='modal-container' onClick={closeOutside}>
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
          {title && <p className='modal-title'>{title}</p>}

          <div className='modal-children'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
