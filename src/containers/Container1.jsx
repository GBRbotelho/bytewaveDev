import React from "react";
import styles from "./Container1.module.css";

//Imgs | Icon
import icon from "../assets/imgs/2.svg";

export default function Container1() {
  return (
    <section className={styles.section} id="home">
      <div className={styles.container}>
        <div className={styles.div1}>
          <div className={styles.cardDiv1}>
            <div className={styles.dataCardDiv1}>
              <h1>Expanda sua empresa com nossas soluções</h1>
              <p>
                Sites personalizados focados em conectar sua empresa com seus
                clientes
              </p>
            </div>
            <a href="https://wa.me/19998631040">
              <button>COMEÇAR</button>
            </a>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.cardDiv2}>
            <div className={styles.cardImgs}>
              <div className={styles.divImgs1}>
                <div className={styles.img1}></div>
                <div className={styles.img2}></div>
              </div>
              <div className={styles.divImgs2}>
                <div className={styles.img3}></div>
                <div className={styles.img4}></div>
              </div>
            </div>
            <div className={styles.divBottom}>
              <img src={icon} alt="Icone Clientes" />
              <h1>mais clientes</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
