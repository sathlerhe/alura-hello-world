import styles from "./postModel.module.css";

function PostModel({ wallpaper, title, children }) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${wallpaper})` }}
      />
      <h2 className={styles.titulo}>{title}</h2>
      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  );
}

export default PostModel;
