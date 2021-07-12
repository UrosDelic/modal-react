import React from "react";
import "./modal.css";

const Modal = ({ title, close, children, preventClosingOutside, childrenStyle, closeButton }) => {
  return (
    <div
      className='modal-container'
      onClick={
        preventClosingOutside === undefined || preventClosingOutside === false ? close : null
      }
    >
      <div
        className='modal'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {closeButton && (
          <div className='x-close-container'>
            <span onClick={close} className='modal-btn-close'>
              x
            </span>
          </div>
        )}
        <div className='modal-items'>
          {title && <p className='modal-title'>{title}</p>}

          <div className={childrenStyle}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
