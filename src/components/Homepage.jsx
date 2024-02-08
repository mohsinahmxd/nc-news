import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { getAllTopics } from "../utils/api";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [fetchedTopics, setFetchedTopics] = useState();

  useEffect(() => {
    getAllTopics().then((data) => {
      setFetchedTopics(data);
    });
  }, []);

  return (
    <>
      <Typography variant="h4">Welcome!</Typography>

      <Typography>
        <Link to="/articles">Click here to view all articles</Link>
      </Typography>

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
