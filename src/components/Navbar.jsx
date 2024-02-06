import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">
          <Typography>Home</Typography>
        </Link>
      </li>
      <li>
        <Typography>
          <a href="#news">News</a>
        </Typography>
      </li>
      <li>
        <Typography>
          <a href="#contact">Contact</a>
        </Typography>
      </li>
      <li>
        <Typography>
          <a href="#about">About</a>
        </Typography>
      </li>
    </ul>
  );
}
