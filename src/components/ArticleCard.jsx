import {
  Card,
  Typography,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
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
    <Card
      component={Link}
      to={`/articles/${article.article_id}`}
      variant="outlined"
      sx={{
        maxWidth: 345,
        textDecoration: "none",
        border: "none",
        mx: 2,
      }}
    >
      <CardActionArea>
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
            Votes: {article.votes}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Votes: {article.comment_count}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Upvote
        </Button>
        <Button size="small" color="primary">
          Downvote
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
