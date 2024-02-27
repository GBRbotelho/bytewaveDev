import React, { useEffect, useState } from "react";
import styles from "./Container5.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../assets/imgs/comments/1.png";
import img2 from "../assets/imgs/comments/2.png";
import img3 from "../assets/imgs/comments/3.png";
import img4 from "../assets/imgs/comments/4.png";

export default function Container5() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <section className={styles.section} id="clientes">
      <div className={styles.container}>
        <div className={styles.divTitle}>
          <h2 className={styles.title}>O que nossos clientes dizem?</h2>
        </div>
        {windowWidth > 1001 ? (
          <div className={styles.cards}>
            <div className={styles.card}>
              <p>
                Fizeram o meu site, estou muito contente com o resultado, todos
                foram muito atenciosos ao me explicar e tirar minhas dúvidas,
                com certeza indico!
              </p>
              <div className={styles.dataCard}>
                <div className={styles.circle}>
                  <img src={img1} alt="Foto Comentario" />
                </div>
                <p>Pedro Souza</p>
                <span>CEO</span>
              </div>
            </div>
            <div className={styles.card}>
              <p>
                Sempre muito bem atendida, fizeram meu sistema do zero e me
                atende super bem o sistema facilitando minha vida no
                consultório. Estão sempre prontos para ajudar.
              </p>
              <div className={styles.dataCard}>
                <div className={styles.circle}>
                  <img src={img2} alt="Foto Comentario" />
                </div>
                <p>Gabriela Tintori</p>
                <span>CEO</span>
              </div>
            </div>
            <div className={styles.card}>
              <p>
                Otima empresa e bem atenciosos, foram muito transparentes e
                rapidos na entrega do site.
              </p>
              <div className={styles.dataCard}>
                <div className={styles.circle}>
                  <img src={img3} alt="Foto Comentario" />
                </div>
                <p>Lucila Martins</p>
                <span>CEO</span>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.cards}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={100}
              slidesPerView={1}
              autoplay={1000}
              pagination={{ clickable: true }}
              className={styles.swiperCards}
              loop={true}
            >
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <p>
                    Fizeram o meu site, estou muito contente com o resultado,
                    todos foram muito atenciosos ao me explicar e tirar minhas
                    dúvidas, com certeza indico!
                  </p>
                  <div className={styles.dataCard}>
                    <div className={styles.circle}>
                      <img src={img1} alt="Foto Comentario" />
                    </div>
                    <p>Pedro Souza</p>
                    <span>CEO</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <p>
                    Sempre muito bem atendida, fizeram meu sistema do zero e me
                    atende super bem o sistema facilitando minha vida no
                    consultório. Estão sempre prontos para ajudar.
                  </p>
                  <div className={styles.dataCard}>
                    <div className={styles.circle}>
                      <img src={img2} alt="Foto Comentario" />
                    </div>
                    <p>Gabriela Tintori</p>
                    <span>CEO</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <p>
                    Otima empresa e bem atenciosos, foram muito transparentes e
                    rapidos na entrega do site.
                  </p>
                  <div className={styles.dataCard}>
                    <div className={styles.circle}>
                      <img src={img3} alt="Foto Comentario" />
                    </div>
                    <p>Lucila Martins</p>
                    <span>CEO</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <p>
                    Me atenderam super bem, sempre me apresentando ótimos
                    resultados e atendendo minhas necessidades. Super indico.
                  </p>
                  <div className={styles.dataCard}>
                    <div className={styles.circle}>
                      <img src={img4} alt="Foto Comentario" />
                    </div>
                    <p>Elaine Rodrigues</p>
                    <span>CEO</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}
