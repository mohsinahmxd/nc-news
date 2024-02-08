import { DeleteOutlineSharp } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { DeleteCommentApi } from "../utils/api";

export default function DeleteComment({ commentId, setComments }) {
  function handleClick(event) {
    event.preventDefault();
    setComments((prevComments) => {
      return prevComments.filter((comment) => {
        return comment.comment_id !== commentId;
      });
    });

    DeleteCommentApi(commentId).then(() => {});
  }

  return (
    <IconButton
      onClick={(event) => {
        handleClick(event);
      }}
      sx={{
        "&:hover": {
          borderRadius: 2, // Remove border radius on hover
        },
      }}
    >
      <DeleteOutlineSharp></DeleteOutlineSharp>
      <Typography>Delete Comment</Typography>
    </IconButton>
  );
}
