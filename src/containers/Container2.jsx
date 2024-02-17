import React from "react";
import styles from "./Container2.module.css";

//Icons
import icon1 from "../assets/imgs/3.svg";
import icon2 from "../assets/imgs/4.svg";
import icon3 from "../assets/imgs/5.svg";
import icon4 from "../assets/imgs/6.svg";

export default function Container2() {
  return (
    <section className={styles.section} id="servicos">
      <div className={styles.container}>
        <div className={styles.divTitle}>
          <h2 className={styles.title}>Quais nossos serviços?</h2>
        </div>
        <div className={styles.divCards}>
          <div className={styles.card}>
            <div>
              <img src={icon1} alt="Icone Landing Page" />
            </div>
            <h2>Landing Pages</h2>
            <p>
              sites que são focados em vendas especificas desenvolvidos em 1
              única pagina.
            </p>
          </div>
          <div className={styles.card}>
            <div>
              <img src={icon2} alt="Icone Institucional" />
            </div>
            <h2>Institucionais</h2>
            <p>
              sites que são como cartões de visita aprensetando sua empresa e
              serviços.
            </p>
          </div>
          <div className={styles.card}>
            <div>
              <img src={icon3} alt="Icone Blogs e Portais" />
            </div>

            <h2>Blogs e portais</h2>
            <p>
              sites que são como jornais online, contendo artigos ou noticias
              importantes.
            </p>
          </div>
          <div className={styles.card}>
            <div>
              <img src={icon4} alt="Icone Sistemas" />
            </div>
            <h2>sistemas</h2>
            <p>
              Um software totalmente focado nas necessidades da sua empresa e
              totalmente personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
