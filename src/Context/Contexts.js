import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <MyContext.Provider value={{open, setOpen, handleClose, handleOpen }}>
      {children}
    </MyContext.Provider>
  );
};
