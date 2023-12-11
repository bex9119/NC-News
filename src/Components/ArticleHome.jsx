import { useEffect, useState } from "react";
import getAllArticles from "../api";
import { Link } from "react-router-dom";

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
          <ul>
            {limitedArticles.map((article) => {
              return (
                <li key={article.article_id} className="articles">
                  <h3>{article.title}</h3>
                  <img src={article.article_img_url} alt="article image" />
                  <p>{article.author}</p>
                  <p>{article.topic}</p>
                </li>
              );
            })}
          </ul>
          <Link to="/articles">
            <button>All Articles</button>
          </Link>
        </main>
      );
  }
}

export default ArticleHome;
