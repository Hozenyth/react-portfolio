import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, sou Hozenyth </h1>
        <p className={styles.description}>
        Sou desenvolvedora full-stack com 3 anos de experiência em C#/.NET e conhecimentos
        em React e Flutterflow.<br></br>
        Entre em contato se quiser saber mais!
        </p>
        <a href="mailto:hozenyth.andrade@gmail.com" className={styles.contactBtn}>
          Fale comigo
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
