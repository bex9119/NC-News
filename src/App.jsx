import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleHome from "./Components/ArticleHome";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import IndividualArticle from "./Components/IndividualArticle";
import AllArticles from "./Components/AllArticles";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticleHome />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
        <Route path="/articles/topics/:topic" element={<AllArticles />} />
      </Routes>
    </>
  );
}

export default App;
