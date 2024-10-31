// App.jsx
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppContext } from "./contexts/AppContext"; // Asegúrate de que la ruta es correcta
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import AcercaDe from "./components/AcercaDe";

function App() {
  const { loggedIn, setLoggedIn } = useContext(AppContext);

  return (
    <Router>
      {/* Solo mostrar el Navbar si el usuario está autenticado */}
      {loggedIn && <Navbar />}
      <Routes>
        {/* Redireccionar al login si no está autenticado */}
        <Route
          path="/"
          element={!loggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : <Navigate to="/home" />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acercaDe" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default App;
