import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import { getArticleViaId, getCommentsForArticle } from "../utils/api";
import CommentCard from "./CommentCard";
import { Typography } from "@mui/material";

export default function Article() {
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getArticleViaId(article_id),
      getCommentsForArticle(article_id),
    ])
      .then(([articleData, commentsData]) => {
        setArticle(articleData);
        setComments(commentsData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <ArticleCard article={article} />
          <Typography>{article.body}</Typography>
          <Typography variant="h5">Comments: {comments.length}</Typography>
          {comments.map((comment, i) => {
            return (
              <div key={i}>
                <CommentCard comment={comment}></CommentCard>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
