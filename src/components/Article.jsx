import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import ArticleCard from "./ArticleCard";
import ncnewsApi from "../utils/axiosInstance";

export default function Article({ articleId }) {
  const [article, setArticle] = useState();

  useEffect(() => {
    ncnewsApi
      .get(`/articles/${articleId}`)
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
        <>
          <ArticleCard article={article} />
          <p>{article.body}</p>
        </>
      )}
    </>
  );
}
