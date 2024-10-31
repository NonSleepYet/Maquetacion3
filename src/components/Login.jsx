import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';

const Login = () => {
    const { setLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoggedIn(true);
        navigate('/home');
    };

    return (
        <div className={styles.login}>
            <h1>Iniciar Sesión</h1>
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    );
};

export default Login;
