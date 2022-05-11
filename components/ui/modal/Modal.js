import React, { useState } from 'react';
import CloseIcon from './CloseIcon';
import classes from './Modal.module.css';

const Modal = (props) => {
  const closeModal = () => {
    // props.closeModalHandler();
  };
  return (
    <>
      <div className={classes.root}>
        <div onClick={closeModal} className={classes.overlay}></div>
        <div className={classes.modal}>
          {props.children}
          {/* <button className={classes.closeButton} onClick={closeModal}>
            <CloseIcon />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
