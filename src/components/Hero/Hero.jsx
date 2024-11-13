import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sobre a Minha Jornada</h1>
        <p className={styles.description}>
        Olá, sou <strong className={styles.name}>Hozenyth Andrade</strong>, desenvolvedora fullstack com 3 anos de experiência em C# e .NET,
        além de conhecimentos em React e FlutterFlow. Com paixão por criar soluções eficientes e inovadoras, 
        estou sempre em busca de novos desafios. <br></br>
        Entre em contato se quiser saber mais!
        </p>
        <a href="mailto:hozenyth.andrade@gmail.com" className={styles.contactBtn}>
          Fale comigo
        </a>
      </div>
      <br></br>
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
