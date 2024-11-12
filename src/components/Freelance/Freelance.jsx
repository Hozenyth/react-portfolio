import React from "react";

import styles from "./Freelance.module.css";
import { getImageUrl } from "../../utils";

export const Freelance = () => {
  return (
    <section className={styles.container} id="freelance">
      <h2 className={styles.title}>Serviços Freelance</h2><br></br>
      <p className={styles.subtitle}>Transformo ideias em realidade por meio de soluções digitais personalizadas. Saiba mais:</p>
      <div className={styles.content}>
        <img
          src={getImageUrl("Freelance/web.png")}
          alt="Web Development"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.destac}>Desenvolvimento Web e Mobile</h3>
              <p>
              Crio interfaces de usuário modernas, responsivas e envolventes. 
              Posso ajudar tanto em websites quanto em aplicativos mobile, desde o design até a publicação nas lojas de apps.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.destac} >Integração de API e Backend </h3>
              <p>
              Se você precisa de uma aplicação robusta e conectada, eu ofereço serviços de integração e desenvolvimento de APIs REST,
              microsserviços e bancos de dados com SQL Server, para garantir um backend eficiente e escalável que suporte sua solução de ponta a ponta.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/app.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.destac}>Consultoria e Manutenção de Sistemas </h3>
              <p>
              Ofereço suporte técnico contínuo para empresas e profissionais que buscam manter seus sistemas atualizados e otimizados. 
              Com experiência em manutenção de sistemas legados e melhorias em funcionalidades, estou disponível para auxiliar na evolução do seu projeto de maneira ágil e eficiente.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
