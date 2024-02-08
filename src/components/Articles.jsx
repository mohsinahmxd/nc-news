import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../utils/api";
import { Container, Grid, Typography } from "@mui/material";
import ErrorMsg from "./ErrorMsg";
import { useParams } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    getAllArticles(topic)
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => {
        setError(`${err.message}: Error fetching articles`);
      });

    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Typography>Loading articles...</Typography>}

      {!loading && error && <ErrorMsg message={error}></ErrorMsg>}

      {!loading && !error && (
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
      )}
    </>
  );
}
