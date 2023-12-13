import { Route, Routes } from 'react-router-dom'
import './App.css'
import ArticleHome from './Components/ArticleHome'
import ArticlesList from './Components/ArticlesList'
import Header from './Components/Header'
import Nav from './Components/Nav'
import IndividualArticle from './Components/IndividualArticle'
import ArticleByTopic from './Components/ArticleByTopic'

function App() {


  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticleHome />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
        <Route path='/articles/topics/:topic' element={<ArticleByTopic/>} />
      </Routes>
    </>
  );
}

export default App
