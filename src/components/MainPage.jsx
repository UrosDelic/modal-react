import React, { useState, useEffect } from "react";
import ConfirmationDialog from "./Confirmation-dialog/ConfirmationDialog";

const MainPage = () => {
  const [isDialog, setDialog] = useState(true);

  useEffect(() => {}, []);

  const openDialog = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <div>
      <button onClick={openDialog}>Open Dialog</button>
      {isDialog && (
        <ConfirmationDialog
          close={closeDialog}
          acceptAction={() => {
            alert("Dialog will stay opened");
          }}
          declineAction={() => {
            alert("Dialog will close");
            setDialog(false);
          }}
          dialogText={"Sample dialog text"}
          acceptText={"Accept"}
          declineText={"Decline"}
        ></ConfirmationDialog>
      )}
    </div>
  );
};

export default MainPage;
