import { getAllTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ArticleTopics() {
  const [fetchedTopics, setFetchedTopics] = useState();

  useEffect(() => {
    getAllTopics().then((data) => {
      setFetchedTopics(data);
    });
  }, []);
  return (
    <>
      <Typography variant="h4">View Articles By Topic</Typography>
      {fetchedTopics &&
        fetchedTopics.map((topic, i) => (
          <div key={i}>
            <Typography>
              <Link to={`/${topic.slug}`}>{topic.slug}</Link>
            </Typography>
          </div>
        ))}
    </>
  );
}
