// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/home" className={styles.navItem}>Home</Link>
      <Link to="/servicios" className={styles.navItem}>Servicios</Link>
      <Link to="/contacto" className={styles.navItem}>Contacto</Link>
      <Link to="/acercaDe" className={styles.navItem}>Acerca de</Link>
      <button 
        className={styles.navItem} 
        onClick={() => {
          // Cerrar sesión y redirigir a login
          setLoggedIn(false); // Asegúrate de tener acceso a setLoggedIn aquí
        }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Navbar;
