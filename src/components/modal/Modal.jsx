import React from "react";
import "./modal.css";

const Modal = (props) => {
  return (
    <div className='modal-container'>
      <div className='modal'>
        <h2 className='modal-header'>{props.headline}</h2>
        <p className='modal-text'>{props.modalText}</p>
        <button onClick={props.onClick} className='modal-btn-close'>
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
