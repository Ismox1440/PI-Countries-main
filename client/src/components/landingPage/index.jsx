import React from "react";
import { Link } from "react-router-dom";
import mapaizq from "../../assets/images/mapaizq.png";
import mapader from "../../assets/images/mapader.png";
import styles from "./index.module.css";

const Index = () => {
  return (
    <div className={styles.landingpage}>
      <div className={styles.mapa}>
        <img id={styles.mapaIzq} className={styles.img} src={mapaizq} alt="map" />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Countries</h1>
          <h3> & activities</h3>
        </div>
        <Link to="/home">
          <button className={styles.btn}>Home</button>
        </Link>
      </div>
      <div className="mapaDer">
        <img className={styles.img} src={mapader} alt="map" />
      </div>
    </div>
  );
};

export default Index;
