import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h2>Welcome!</h2>

      <p>
        <Link to="/articles">Click here to view all articles</Link>
      </p>
    </>
  );
}
