import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import { getArticleViaId, getCommentsForArticle } from "../utils/api";
import CommentCard from "./CommentCard";
import { Typography } from "@mui/material";
import ErrorMsg from "./ErrorMsg";
import PostComment from "./PostComment";

export default function SingleArticle() {
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();
  const { article_id } = useParams();
  const [articleLoading, setArticleLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [articleError, setArticleError] = useState(false);
  const [commentsError, setCommentsError] = useState(false);

  useEffect(() => {
    getArticleViaId(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setArticleLoading(false);
      })
      .catch((err) => {
        setArticleError(`${err.message}: Error loading article`);
        setArticleLoading(false);
      });
  }, []);

  useEffect(() => {
    getCommentsForArticle(article_id)
      .then((commentsData) => {
        setComments(commentsData);
        setCommentsLoading(false);
      })
      .catch((err) => {
        setCommentsError(`${err.message}: Error loading comments`);
        setCommentsLoading(false);
      });
  }, []);

  return (
    <>
      {articleLoading && <Typography>Loading article...</Typography>}

      {!articleLoading && articleError && (
        <ErrorMsg message={articleError}></ErrorMsg>
      )}

      {commentsLoading && <Typography>Loading comments...</Typography>}

      {!commentsLoading && commentsError && (
        <ErrorMsg message={commentsError}></ErrorMsg>
      )}

      {!articleLoading &&
        !articleError &&
        !commentsLoading &&
        commentsError && (
          <>
            <ArticleCard article={article} />
            <Typography>{article.body}</Typography>
          </>
        )}

      {!articleLoading &&
        articleError &&
        !commentsLoading &&
        !commentsError && (
          <>
            <Typography variant="h5">Comments: {comments.length}</Typography>
            {comments.map((comment, i) => (
              <div key={i}>
                <CommentCard comment={comment} />
              </div>
            ))}
          </>
        )}

      {!articleLoading &&
        !articleError &&
        !commentsLoading &&
        !commentsError && (
          <>
            <ArticleCard article={article} />
            <Typography>{article.body}</Typography>
            <Typography variant="h5">Comments: {comments.length}</Typography>
            <PostComment
              setComments={setComments}
              articleId={article_id}
            ></PostComment>
            {comments.map((comment, i) => (
              <div key={i}>
                <CommentCard comment={comment} />
              </div>
            ))}
          </>
        )}
    </>
  );
}
