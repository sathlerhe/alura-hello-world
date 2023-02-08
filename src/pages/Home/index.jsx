import React from "react";
import Post from "../../components/Post";

import posts from "../../json/posts.json";

import styles from "./home.module.css";

function Home() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}

export default Home;
