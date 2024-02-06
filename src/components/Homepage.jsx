import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Homepage() {
  return (
    <>
      <Typography variant="h4">Welcome!</Typography>

      <Typography>
        <Link to="/articles">Click here to view all articles</Link>
      </Typography>
    </>
  );
}
