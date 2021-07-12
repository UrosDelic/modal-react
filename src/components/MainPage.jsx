import React, { useState, useEffect } from "react";
import Modal from "./modal/Modal";
import ConfirmationDialog from "./Confirmation-dialog/ConfirmationDialog";

const MainPage = () => {
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    if (isModal === true) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
  }, [isModal]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModal && (
        <Modal close={closeModal} closeButton>
          <ConfirmationDialog
            dialogText={"Sample dialog text"}
            acceptText={"Accept"}
            declineText={"Decline"}
          ></ConfirmationDialog>
        </Modal>
      )}
    </div>
  );
};

export default MainPage;
