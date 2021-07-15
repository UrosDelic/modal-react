import React, { useEffect } from "react";
import "./modal.css";

const Modal = ({ title, close, children, preventClosingOutside, removeCloseButton }) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    // onClick={!preventClosingOutside && (close ? close : undefined)}
    // preventClosingOutside === undefined || preventClosingOutside === false ? close : null
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
        {!removeCloseButton && (
          <div className='x-close-container'>
            <span onClick={close} className='modal-btn-close'>
              x
            </span>
          </div>
        )}
        <div className='modal-items'>
          {title && <p className='modal-title'>{title}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
