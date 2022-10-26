import React, { useState } from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";

const AlertBox = (props) => {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={props.type} variant={props.variant} elevation={3}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertBox;
