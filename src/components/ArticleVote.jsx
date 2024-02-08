import { Button } from "@mui/material";
import { voteOnArticle } from "../utils/api";

export default function ArticleVote({ articleId, votes, setVotes, setErrors }) {
  function handleVote(choice, articleId) {
    if (choice === "upvote") {
      setVotes((currVotes) => currVotes + 1);
    } else {
      setVotes((currVotes) => currVotes - 1);
    }

    voteOnArticle(choice, articleId).catch((err) => {
      if (choice === "upvote") {
        setVotes((currVotes) => currVotes - 1);
      } else {
        setVotes((currVotes) => currVotes + 1);
      }

      setErrors((prevErrors) => [
        ...prevErrors,
        `${err.message}: Error voting on article`,
      ]);
    });
  }

  return (
    <>
      <Button
        size="small"
        color="primary"
        onClick={() => {
          handleVote("upvote", articleId);
        }}
      >
        Upvote
      </Button>
      <Button
        size="small"
        color="primary"
        onClick={() => {
          handleVote("downvote", articleId);
        }}
      >
        Downvote
      </Button>
    </>
  );
}
