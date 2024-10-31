import React from "react";
import styles from '../styles/Servicios.module.css';

function Servicios() {
  return (
    <div className={styles["servicios-container"]}>
      <div className={styles.servicio}>Servicio 1</div>
      <div className={styles.servicio}>Servicio 2</div>
      <div className={styles.servicio}>Servicio 3</div>
    </div>
  );
}

export default Servicios;

