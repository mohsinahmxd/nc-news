import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Articles() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios
      .get("https://my-web-service-dwf8.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((err) => {
        console.log("there's an err", err);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {articles &&
        articles.map((article, i) => {
          return (
            <div key={i}>
              <h2>Article {i + 1}</h2>
              <p> Article author: {article.author}</p>
              <p>Article title: {article.title}</p>
              <p>Article ID: {article.article_id}</p>
              <p>Topic: {article.topic}</p>
              <p>Created at: {article.created_at}</p>
              <p>Votes: {article.votes}</p>
              <img
                src={article.article_img_url}
                alt={`Article ${article.title} image`}
              />
              <p>Comment count: {article.comment_count}</p>
            </div>
          );
        })}
    </>
  );
}
