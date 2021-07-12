import React, { useState, useEffect } from "react";
import Modal from "./modal/Modal";
import ConfirmationDialog from "./Confirmation-dialog/ConfirmationDialog";

const MainPage = () => {
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    if (isModal === true) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
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
            acceptAction={() => {
              alert("Modal will stay opened");
            }}
            declineAction={() => {
              alert("Modal will close");
              setModal(false);
            }}
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
