import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../utils/api";
import { Container, Grid, MenuItem, Select, Typography } from "@mui/material";
import ErrorMsg from "./ErrorMsg";
import ArticleTopics from "./ArticleTopics";

export default function Articles({ searchParams, setSearchParams }) {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const topic = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order");

  useEffect(() => {
    getAllArticles(topic, sortByQuery, orderByQuery)
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => {
        setError(`${err.message}: Error fetching articles`);
      });

    setLoading(false);
  }, [topic, sortByQuery, orderByQuery]);

  const handleSortChange = (event) => {
    const newSortBy = event.target.value;
    setSearchParams((params) => {
      params.set("sort_by", newSortBy);
      return params;
    });
  };

  const handleOrderChange = (event) => {
    const newOrder = event.target.value;
    setSearchParams((params) => {
      params.set("order", newOrder);
      return params;
    });
  };

  return (
    <>
      <ArticleTopics setSearchParams={setSearchParams}></ArticleTopics>
      <Typography variant="h4">Sort Articles</Typography>
      <Select value={sortByQuery || ""} onChange={handleSortChange}>
        <MenuItem value="created_at">Date</MenuItem>
        <MenuItem value="comment_count">Comment Count</MenuItem>
        <MenuItem value="votes">Votes</MenuItem>
      </Select>
      <Select value={orderByQuery || ""} onChange={handleOrderChange}>
        <MenuItem value="ASC">Ascending</MenuItem>
        <MenuItem value="DESC">Descending</MenuItem>
      </Select>
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
