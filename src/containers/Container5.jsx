import React, { useEffect, useState } from "react";
import styles from "./Container5.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
                Entendemos como seu negócio funciona, qual seu publico idela,
                seus principais concorrentes e quais{" "}
              </p>
              <div className={styles.dataCard}>
                <div className={styles.circle}></div>
                <p>Pedro henrique</p>
                <span>CEO</span>
              </div>
            </div>
            <div className={styles.card}>
              <p>
                Entendemos como seu negócio funciona, qual seu publico idela,
                seus principais concorrentes e quais{" "}
              </p>
              <div className={styles.dataCard}>
                <div className={styles.circle}></div>
                <p>Pedro henrique</p>
                <span>CEO</span>
              </div>
            </div>
            <div className={styles.card}>
              <p>
                Entendemos como seu negócio funciona, qual seu publico idela,
                seus principais concorrentes e quais{" "}
              </p>
              <div className={styles.dataCard}>
                <div className={styles.circle}></div>
                <p>Pedro henrique</p>
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
                    Entendemos como seu negócio funciona, qual seu publico
                    idela, seus principais concorrentes e quais{" "}
                  </p>
                  <div className={styles.dataCard}>
                    <div className={styles.circle}></div>
                    <p>Pedro henrique</p>
                    <span>CEO</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <p>
                    Entendemos como seu negócio funciona, qual seu publico
                    idela, seus principais concorrentes e quais{" "}
                  </p>
                  <div className={styles.dataCard}>
                    <div className={styles.circle}></div>
                    <p>Pedro henrique</p>
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
