
import React from 'react';
import "../styles/Contacto.css";

function Contacto() {
    return (
        <div className="container">
          <h1>Contacto</h1>
          <div className="content">
            <div className="box">
              <div className="title">Información</div>
              <div className="options">
                {[...Array(10)].map((_, index) => (
                  <label key={index}>
                    <input type="checkbox" />
                    not selected
                  </label>
                ))}
              </div>
            </div>
            <div className="box">
              <div className="title">Información</div>
              <div className="options">
                {[...Array(10)].map((_, index) => (
                  <label key={index}>
                    <input type="radio" name="options" />
                    option 2
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}

export default Contacto;
