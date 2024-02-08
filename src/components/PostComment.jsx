import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { PostNewComment } from "../utils/api";
import SuccessMsg from "./SuccessMsg";

export default function PostComment({ setComments, articleId }) {
  const [newComment, setNewComment] = useState("");
  const [success, setSuccess] = useState([]);

  function handleChange(event) {
    setNewComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    PostNewComment(newComment, articleId)
      .then((data) => {
        setSuccess((prevSuccess) => [
          ...prevSuccess,
          `Posted comment successfully`,
        ]);
        setComments((prevComments) => {
          return [...prevComments, data];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {success.map((eachSuccess, index) => {
        return (
          <div key={index}>
            <SuccessMsg message={eachSuccess} />
          </div>
        );
      })}

      <form
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <TextField
          sx={{ my: 2, display: "block" }}
          label="Add a comment..."
          fullWidth
          id="addComment"
          type="text"
          value={newComment}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <Button
          sx={{ mb: 2 }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Post Comment
        </Button>
      </form>
    </>
  );
}
