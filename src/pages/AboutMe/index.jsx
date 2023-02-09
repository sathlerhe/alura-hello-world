import React from "react";
import PostModel from "../../components/PostModel";

import wallpaper from "../../assets/sobre_mim_capa.png";
import aboutMePicture from "../../assets/sobre_mim_foto.jpg";

import styles from "./aboutMe.module.css";

function AboutMe() {
  return (
    <PostModel title="Sobre mim" wallpaper={wallpaper}>
      <h3 className={styles.subtitulo}>Olá, eu sou Henrique</h3>

      <img
        src={aboutMePicture}
        alt="Foto Henrique Sathler sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
        laboriosam deserunt doloribus ea temporibus tenetur facilis!
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, sunt
        repudiandae fuga doloremque molestias impedit animi magnam. Velit ullam
        consectetur numquam ipsum sed, maxime inventore, similique, possimus
        consequuntur dolorum eos?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque
        repellendus repellat cumque quaerat voluptatem, doloremque modi debitis,
        ducimus magni, quas sed minus. Ut pariatur beatae aliquam neque id
        voluptatum.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi harum
        laudantium omnis tempore officia placeat modi nostrum dolorum ab quaerat
        nisi esse commodi, quo minima ex fuga earum sunt asperiores?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto cum
        perferendis dolore odit sed ex sequi dicta! Et cupiditate neque ratione
        dignissimos a incidunt dolorem magni eius culpa earum!
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi,
        accusantium repellendus saepe eaque ab dolores nulla est totam
        molestias, tenetur alias cum natus quibusdam vitae commodi? Architecto,
        quod incidunt!
      </p>
    </PostModel>
  );
}

export default AboutMe;
