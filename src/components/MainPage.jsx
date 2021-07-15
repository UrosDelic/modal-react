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
    <div className='main-page'>
      <div className='main-page-content'>
        <button onClick={openDialog}>Open Dialog</button>
      </div>

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
        >
          <button>asdsadasdaasd</button>
          <button>asdsadasdaasd</button>
          <button>asdsadasdaasd</button>
          <button>asdsadasdaasd</button>
          <button>asdsadasdaasd</button>
          <button>asdsadasdaasd</button>
        </ConfirmationDialog>
      )}
    </div>
  );
};

export default MainPage;
