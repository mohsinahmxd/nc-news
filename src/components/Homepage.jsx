import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ArticleTopics from "./ArticleTopics";

export default function Homepage() {
  return (
    <>
      <Typography variant="h4">Welcome!</Typography>

      <Typography>
        <Link to="/articles">Click here to view all articles</Link>
      </Typography>
      <ArticleTopics></ArticleTopics>
    </>
  );
}
