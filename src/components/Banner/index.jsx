import styles from "./banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.jpg";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Henrique Sathler,
          desenvolvedor frontend na Tikal Tech. Aqui compartilho vários
          conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Henrique Sathler"
        />
      </div>
    </div>
  );
}

export default Banner;
