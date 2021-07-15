import React, { useState, useEffect } from "react";
import ConfirmationDialog from "./Confirmation-dialog/ConfirmationDialog";

const MainPage = () => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  useEffect(() => {}, []);

  const openDialog = () => {
    setIsDialogOpened(true);
  };

  const closeDialog = () => {
    setIsDialogOpened(false);
  };

  return (
    <div>
      <button onClick={openDialog}>Open Dialog</button>

      {isDialogOpened && (
        <ConfirmationDialog
          close={closeDialog}
          acceptAction={() => {
            alert("Dialog will stay opened");
          }}
          declineAction={() => {
            alert("Dialog will close");
            setIsDialogOpened(false);
          }}
          dialogText={"Sample dialog text"}
          acceptButtonText={"Accept"}
          declineButtonText={"Decline"}
        >
          {/* <button>test scroll</button>
          <button>test scroll</button>
          <button>test scroll</button>
          <button>test scroll</button>
          <button>test scroll</button>
          <button>test scroll</button> */}
        </ConfirmationDialog>
      )}
    </div>
  );
};

export default MainPage;
