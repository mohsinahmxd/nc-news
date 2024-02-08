import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArticleVote from "./ArticleVote";
import { useState } from "react";
import ErrorMsg from "./ErrorMsg";

const ArticleCard = ({ article }) => {
  const [errors, setErrors] = useState([]);
  const [votes, setVotes] = useState(article.votes);
  let createdAtDate = new Date(article.created_at);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  let formattedCreatedAt = createdAtDate.toLocaleDateString("en-GB", options);

  return (
    <>
      {errors.map((err, index) => {
        return (
          <div key={index}>
            <ErrorMsg message={err} />
          </div>
        );
      })}
      <Card
        sx={{
          maxWidth: 345,
          textDecoration: "none",
          border: "none",
        }}
      >
        <CardActionArea component={Link} to={`/articles/${article.article_id}`}>
          <CardMedia
            component="img"
            height="140"
            image={article.article_img_url}
            alt={`Article ${article.title} image`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author: {article.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Topic: {article.topic}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Date posted: {formattedCreatedAt}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Votes: {votes}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Comments: {article.comment_count}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ArticleVote
            articleId={article.article_id}
            setVotes={setVotes}
            votes={votes}
            setErrors={setErrors}
          ></ArticleVote>
        </CardActions>
      </Card>
    </>
  );
};

export default ArticleCard;
