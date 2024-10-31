import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from "./contexts/AppContext";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import AcercaDe from './components/AcercaDe';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/acerca de" element={<AcercaDe />} />
                </Routes>
            </Router>
        </AppProvider>
    );
};

export default App;

