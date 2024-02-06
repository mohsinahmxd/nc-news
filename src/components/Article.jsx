import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import { getArticleViaId } from "../utils/api";

export default function Article() {
  const [article, setArticle] = useState();
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleViaId(article_id).then((data) => {
      setArticle(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        article && (
          <>
            <ArticleCard article={article} />
            <p>{article.body}</p>
          </>
        )
      )}
    </>
  );
}
