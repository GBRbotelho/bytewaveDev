import React from "react";
import styles from "./Container6.module.css";

export default function Container6() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            Faça um orçamento totalmente gratuito que pode mudar como seus
            clientes veem sua empresa
          </p>
        </div>
        <div className={styles.button}>
          <a href="https://wa.me/19998631040">
            <button>fazer orçamento</button>
          </a>
        </div>
      </div>
    </section>
  );
}
