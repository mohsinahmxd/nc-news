import { Routes, Route, useSearchParams } from "react-router-dom";
import Homepage from "./Homepage";
import Articles from "./Articles";
import Header from "./Header";
import Navbar from "./Navbar";
import SingleArticle from "./SingleArticle";
import NotFound from "./NotFound";

function App() {
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
    order: "DESC",
  });
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<Homepage setSearchParams={setSearchParams} />}
        />
        <Route
          path="/articles"
          element={
            <Articles
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          }
        />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
