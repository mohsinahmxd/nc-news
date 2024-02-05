import { Link } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Homepage() {
  return (
    <>
      <Header></Header>

      <Navbar></Navbar>

      <h2>Welcome!</h2>

      <p>
        <Link to="/articles">Click here to view all articles</Link>
      </p>
    </>
  );
}
