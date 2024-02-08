import { Typography } from "@mui/material";
import { useState } from "react";
import DeleteComment from "./DeleteComment";

const CommentCard = ({ comment, setComments }) => {
  const [loggedInUser, setLoggedInUser] = useState("grumpy19");

  return (
    <div>
      <Typography variant="h6">
        {comment.author} at {comment.created_at}
      </Typography>
      <Typography>{comment.body}</Typography>
      <Typography>Votes: {comment.votes}</Typography>
      {comment.author === loggedInUser ? (
        <DeleteComment
          commentId={comment.comment_id}
          setComments={setComments}
        ></DeleteComment>
      ) : null}
    </div>
  );
};

export default CommentCard;
