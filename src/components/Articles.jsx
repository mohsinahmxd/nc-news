import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../utils/api";
import { Container, Grid, Typography } from "@mui/material";

export default function Articles() {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Typography>Loading...</Typography>
  ) : (
    <Container>
      <Grid container spacing={4}>
        {articles &&
          articles.map((article, i) => (
            <Grid item key={i} xs={12} md={6} lg={4}>
              <ArticleCard article={article} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
