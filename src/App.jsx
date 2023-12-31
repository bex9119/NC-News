import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleHome from "./Components/ArticleHome";
import Header from "./Components/Header";
import Navigation from "./Components/Nav";
import IndividualArticle from "./Components/IndividualArticle";
import AllArticles from "./Components/AllArticles";
import ErrorHandling from './Components/ErrorHandling'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<ArticleHome />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
        <Route path="/articles/topics/:topic" element={<AllArticles  />} />
        <Route path='/*' element={<ErrorHandling message='Route Not Found'/>}/>
      </Routes>
    </>
  );
}

export default App;
