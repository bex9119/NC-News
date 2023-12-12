import { useEffect, useState } from "react";
import getAllArticles from "../api";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

const ArticleHome = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limitedArticles, setLimitedArticles] = useState([]);

  useEffect(() => {
      getAllArticles().then((allArticles) => {
          setArticlesList(allArticles)
          setIsLoading(false);
      })
  }, [])
    
    useEffect(() => {
        setLimitedArticles([...articlesList].slice(0, 5));
    }, [articlesList])


  if (isLoading) {
      return <h2>Loading...</h2>
  }
  else {
      return (
        <main>
          <h2>Newest</h2>
          <ArticleCard multipleArticles={limitedArticles} />
          <Link to="/articles">
            <button>All Articles</button>
          </Link>
        </main>
      );
  }
}

export default ArticleHome;
