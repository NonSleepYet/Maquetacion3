import React, { createContext, useState } from "react";

// Crear el contexto
export const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false); // Estado de autenticación

  return (
    <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}  {/* Renderiza los hijos dentro del Provider */}
    </AppContext.Provider>
  );
};
