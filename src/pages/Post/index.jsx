import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import posts from "../../json/posts.json";
import PostModel from "../../components/PostModel";

import './post.css';

function Post() {
  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  return (
    <PostModel
      wallpaper={`/assets/posts/${post.id}/capa.png`}
      title={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModel>
  );
}

export default Post;
