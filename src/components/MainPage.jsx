import React, { useState } from "react";
import Modal from "./modal/Modal";
import ConfirmationDialog from "./Confirmation-dialog/ConfirmationDialog";

const MainPage = () => {
  const [isModal, setModal] = useState(false);

  if (isModal === true) {
    document.body.style.overflow = "hidden";
  } else document.body.style.overflow = "visible";

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
        <Modal close={closeModal}>
          <p>Confirmation Dialog</p>
          <ConfirmationDialog acceptText={"Accept"} declineText={"Decline"}></ConfirmationDialog>
        </Modal>
      )}
    </div>
  );
};

export default MainPage;
