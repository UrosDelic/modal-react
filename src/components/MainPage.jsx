import React, { useState } from "react";
import Modal from "./modal/Modal";
const MainPage = () => {
  const [isModal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModal ? (
        <Modal
          headline={"Modal Headline prop"}
          modalText={"Modal sample text prop"}
          onClick={closeModal}
        ></Modal>
      ) : null}
    </div>
  );
};

export default MainPage;
