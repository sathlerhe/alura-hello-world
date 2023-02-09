import styles from "./button.module.css";

function Button({ children, onClick, size }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[size]}`}>
      {children}
    </button>
  );
}

export default Button;
