import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";

const CommentCard = ({ comment }) => {
  return (
    <div>
      <Typography variant="h6">
        {comment.author} at {comment.created_at}
      </Typography>
      <Typography>{comment.body}</Typography>
      <Typography>Votes: {comment.votes}</Typography>
    </div>
  );
};

export default CommentCard;

{
  /* <IconButton>
  <DeleteOutlined></DeleteOutlined>
</IconButton> */
}
