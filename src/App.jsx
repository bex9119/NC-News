import { Route, Routes } from 'react-router-dom'
import './App.css'
import ArticleHome from './Components/ArticleHome'
import ArticlesList from './Components/ArticlesList'
import Header from './Components/Header'
import Nav from './Components/Nav'

function App() {


  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticleHome />} />
        <Route path="/articles" element={<ArticlesList />} />
      </Routes>
    </>
  );
}

export default App
