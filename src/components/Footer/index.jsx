import styles from "./footer.module.css";

import TradeMark from "../../assets/marca_registrada.svg";

function Footer() {
  return (
    <footer className={styles.rodape}>
      <img src={TradeMark} alt="Marca registrada" />
      Desenvolvido por Henrique
    </footer>
  );
}

export default Footer;
