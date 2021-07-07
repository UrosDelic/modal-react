import React, { useState } from "react";
import Modal from "./modal/Modal";
const MainPage = () => {
  const modalText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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
      {isModal && (
        <Modal close={closeModal} title={"Sample Modal Title"}>
          <p>{modalText}</p>
          <button>test child button</button>
        </Modal>
      )}
    </div>
  );
};

export default MainPage;
