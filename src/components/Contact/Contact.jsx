import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>Sinta-se à vontade para entrar em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/whats.png")} alt="WhatsApp icon" />
          <a className={styles.contatoDestaque} href="https://api.whatsapp.com/send?phone=5522999326308&text=Olá%2C%20gostaria%20de%20mais%20informações!" target="_blank"  rel="noopener noreferrer">Entre em contato pelo WhatsApp!</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/hozenyth/" target="_blank"  rel="noopener noreferrer">linkedin.com/Hozenyth</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Hozenyth" target="_blank"  rel="noopener noreferrer">github.com/Hozenyth</a>
        </li>
      </ul>
    </footer>
  );
};
