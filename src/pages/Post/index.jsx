import React from "react";
import { Routes, useParams, Route } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import posts from "../../json/posts.json";
import PostModel from "../../components/PostModel";
import DefaultPage from "../../components/DefaultPage";

import "./post.css";
import NotFound from "../NotFound";

function Post() {
  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <PostModel
              wallpaper={`/assets/posts/${post.id}/capa.png`}
              title={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
}

export default Post;
