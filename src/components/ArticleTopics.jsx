import { getAllTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ArticleTopics({ setSearchParams }) {
  const [fetchedTopics, setFetchedTopics] = useState();

  useEffect(() => {
    getAllTopics().then((data) => {
      setFetchedTopics(data);
    });
  }, []);

  function handleClick(topicClicked) {
    setSearchParams((params) => {
      params.set("topic", topicClicked);
      // console.log(params.toString());
      return params;
    });
  }
  return (
    <>
      <Typography variant="h4">View Articles By Topic</Typography>
      {fetchedTopics &&
        fetchedTopics.map((topic, i) => (
          <Typography key={i}>
            <Link
              to={`/articles/?sort_by=created_at&order=DESC&topic=${topic.slug}`}
              onClick={() => {
                handleClick(topic.slug);
              }}
            >
              {topic.slug}
            </Link>
          </Typography>
        ))}
    </>
  );
}
