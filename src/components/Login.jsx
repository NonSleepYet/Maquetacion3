import React from "react";

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    onLogin(); // Llama a la función para cambiar el estado de loggedIn
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
