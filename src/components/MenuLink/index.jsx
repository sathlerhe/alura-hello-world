import { Link, useLocation } from "react-router-dom";

import styles from "./menuLink.module.css";

function MenuLink({ link, children }) {
  const location = useLocation();

  return (
    <Link
      className={`${styles.link} ${
        location.pathname === link ? styles.linkDestacado : ""
      }`}
      to={link}
    >
      {children}
    </Link>
  );
}

export default MenuLink;
