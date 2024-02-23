import React from "react";
import styles from "./@Index.module.css";

//Containers
import Navbar from "./@Navbar";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";
import Container6 from "./Container6";
import Container7 from "./Container7";

export default function Index() {
  return (
    <main className={styles.main}>
      <div className={styles.background1}>
        <Navbar />
        <Container1 />
      </div>
      <Container2 />
      <Container3 />
      <Container4 />
      <div className={styles.background2}>
        <Container5 />
        <Container6 />
      </div>
      {/* <Container7 /> */}
    </main>
  );
}
