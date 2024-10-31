
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './components/Login';
import Home from './components/Home';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import AcercaDe from './components/AcercaDe';

function App() {
  return (
    <Routes>
      {}
      <Route path="/" element={<Login />} />

      {}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="acerca-de" element={<AcercaDe />} />
      </Route>

      {}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
