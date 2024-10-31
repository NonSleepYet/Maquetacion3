import React from "react";

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    
    onLogin();
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
