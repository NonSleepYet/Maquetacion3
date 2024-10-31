
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
 
    navigate('/dashboard/home'); 
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {}
      <button onClick={handleLogin}>Ir al Dashboard</button>
    </div>
  );
}

export default Login;
