import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Article({ articleId }) {
  const [article, setArticle] = useState();

  useEffect(() => {
    axios
      .get(`https://my-web-service-dwf8.onrender.com/api/articles/${articleId}`)
      .then((response) => {
        setArticle(response.data.article[0]);
      })
      .catch((err) => {
        console.log("there's an err", err);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>

      {article && (
        <div>
          <img
            src={article.article_img_url}
            alt={`Article ${article.title} image`}
          />
          <p>Article author: {article.author}</p>
          <h2>{article.title}</h2>
          <p>Topic: {article.topic}</p>
          <p>Created at: {article.created_at}</p>
          <p>Votes: {article.votes}</p>
          <p>{article.body}</p>
          <p>Comment count: {article.comment_count || 0}</p>
        </div>
      )}
    </>
  );
}
