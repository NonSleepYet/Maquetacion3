
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles/Dashboard.css'; 

function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="servicios">Servicios</Link></li>
          <li><Link to="contacto">Contacto</Link></li>
          <li><Link to="acerca-de">Acerca de</Link></li>
          <li><Link to="login">Cerrar Sesión</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
