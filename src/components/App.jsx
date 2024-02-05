import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Articles from "./Articles";
import Article from "./Article";

function App() {
  const [topic, setTopic] = useState();
  const [articleId, setArticleId] = useState();

  return (
    <Routes>
      <Route path="/" element={<Homepage setTopic={setTopic} />} />
      <Route
        path="/articles"
        element={<Articles setArticleId={setArticleId} />}
      />
      <Route
        path="/articles/:article_id"
        element={<Article articleId={articleId} />}
      />
    </Routes>
  );
}

export default App;

{
  /* <Route
path="/item-list"
element={<ItemList items={items} setItems={setItems} />}
/>
<Route path="/categories" element={<Categories />} />
<Route path="/sell-item" element={<SellItem></SellItem>}></Route>
<Route
path="/user-list"
element={<UserList users={users} setUsers={setUsers}></UserList>}
></Route>
<Route path="/user" element={<User></User>}></Route> */
}
