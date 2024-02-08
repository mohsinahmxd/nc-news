import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Articles from "./Articles";
import Header from "./Header";
import Navbar from "./Navbar";
import SingleArticle from "./SingleArticle";

function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/:topic" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
