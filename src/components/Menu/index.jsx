import MenuLink from "../MenuLink";

import styles from "./menu.module.css";

function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink link="/">Início</MenuLink>
        <MenuLink link="/sobremim">Sobre mim</MenuLink>
      </nav>
    </header>
  );
}

export default Menu;
