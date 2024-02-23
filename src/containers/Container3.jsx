import React from "react";
import styles from "./Container3.module.css";

//Icons
import icon1 from "../assets/imgs/8.svg";
import icon2 from "../assets/imgs/9.svg";
import icon3 from "../assets/imgs/10.svg";
import icon4 from "../assets/imgs/11.svg";

//Setas

import seta1 from "../assets/imgs/16.png";
import seta2 from "../assets/imgs/17.png";
import seta3 from "../assets/imgs/18.png";
import seta4 from "../assets/imgs/19.png";

export default function Container3() {
  return (
    <section className={styles.section} id="servicos">
      <div className={styles.container}>
        <div className={styles.divTitle}>
          <h2 className={styles.title}>Como fazemos nosso processo?</h2>
        </div>
        <div className={styles.containerCards}>
          <div className={styles.divCard}>
            <div className={styles.card}>
              <div className={styles.titleCard}>
                <div className={styles.icon}>
                  <img src={icon1} alt="" />
                </div>
                <div>
                  <h2>Ideia</h2>
                  <p>Passo 1</p>
                </div>
              </div>
              <div className={styles.dataCard}>
                <p>
                  Entendemos como seu negócio funciona, qual seu publico idela,
                  seus principais concorrentes e quais estrategias de rentenção
                  podemos usar para tranformar seu negocio.
                </p>
              </div>
            </div>
            <div className={styles.seta}>
              <img src={seta1}></img>
            </div>
          </div>
          <div className={styles.divCard}>
            <div className={styles.seta}>
              <img src={seta2}></img>
            </div>
            <div className={styles.card}>
              <div className={styles.titleCard}>
                <div className={styles.icon}>
                  <img src={icon2} alt="" />
                </div>
                <div>
                  <h2>MVP</h2>
                  <p>Passo 2</p>
                </div>
              </div>
              <div className={styles.dataCard}>
                <p>
                  Com base nas informações coletadas no passo 1, criamos 2
                  opções viaveis para você escolher.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.divCard}>
            <div className={styles.card}>
              <div className={styles.titleCard}>
                <div className={styles.icon}>
                  <img src={icon3} alt="" />
                </div>
                <div>
                  <h2>Build</h2>
                  <p>Passo 3</p>
                </div>
              </div>
              <div className={styles.dataCard}>
                <p>
                  Utilizaremos as melhores tecnologias do mercado para construir
                  um sistema com o melhor desempenho e SEO otmizado.
                </p>
              </div>
            </div>
            <div className={styles.seta}>
              <img src={seta3}></img>
            </div>
          </div>
          <div className={styles.divCard}>
            <div className={styles.seta}>
              <img src={seta4}></img>
            </div>
            <div className={styles.card}>
              <div className={styles.titleCard}>
                <div className={styles.icon}>
                  <img src={icon4} alt="" />
                </div>
                <div>
                  <h2>Entrega</h2>
                  <p>Passo final</p>
                </div>
              </div>
              <div className={styles.dataCard}>
                <p>
                  Levamos o sistema para uma ultima aprovação e subimos no
                  dominio desejado. acompanhamos por 1 mês bem de perto as
                  metricas para garantir a melhor experiencia dos seus clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
