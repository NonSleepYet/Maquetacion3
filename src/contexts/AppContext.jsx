import React, { createContext, useState } from "react";

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false); // Estado de autenticación

  return (
    <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}  {}
    </AppContext.Provider>
  );
};
