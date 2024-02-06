import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../utils/api";

export default function Articles() {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        articles &&
        articles.map((article, i) => {
          return (
            <div key={i}>
              <ArticleCard article={article} />
              <Link to={`/articles/${article.article_id}`}>
                <p>Click to view article</p>
              </Link>
            </div>
          );
        })
      )}
    </>
  );
}
