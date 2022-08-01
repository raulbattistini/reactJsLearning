import React, { createContext, useState} from "react";
import { useContext } from "react";
export const DialogContext = createContext();

export function DialogProvider({ children }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <DialogContext.Provider
      value={{
        open,
        setOpen,
        handleClickOpen,
        handleClose
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const context = useContext(DialogContext);
  const { open, setOpen } = context;
  return { open, setOpen };
}

//DialogProvider useDialog
