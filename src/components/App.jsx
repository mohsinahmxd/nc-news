import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Articles from "./Articles";
import Article from "./Article";
import Header from "./Header";
import Navbar from "./Navbar";

function App() {
  const [topic, setTopic] = useState();

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage setTopic={setTopic} />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
