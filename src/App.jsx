// App.jsx
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider, AppContext } from "./contexts/AppContext";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import AcercaDe from "./components/AcercaDe";

function App() {
  const { loggedIn, setLoggedIn } = useContext(AppContext);

  return (
    <AppProvider>
      <Router>
        {loggedIn && <Navbar />}
        <Routes>
          {}
          <Route
            path="/"
            element={!loggedIn ? <Login onLogin={() => setLoggedIn(true)} /> : <Home />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acercaDe" element={<AcercaDe />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
