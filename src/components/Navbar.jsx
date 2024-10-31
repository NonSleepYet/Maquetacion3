import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
    <nav className={styles.navbar}>
        <Link to="/home">Home</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/acerca">Acerca de</Link>
    </nav>
);

export default Navbar;
