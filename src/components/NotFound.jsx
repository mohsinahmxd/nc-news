import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <p>404: Not found</p>
      <Link to="/">Back to Home</Link>
    </>
  );
}
