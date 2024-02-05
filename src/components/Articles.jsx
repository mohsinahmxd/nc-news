import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import axiosInstance from "../utils/axiosInstance";

export default function Articles({ setArticleId }) {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axiosInstance
      .get("/articles")
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
            <>
              <ArticleCard key={i} article={article} />
              <Link to={`/articles/${article.article_id}`}>
                <p
                  onClick={() => {
                    setArticleId(article.article_id);
                  }}
                >
                  Click to view article
                </p>
              </Link>
            </>
          );
        })}
    </>
  );
}
