import { useEffect, useState } from "react";
import getAllArticles from "../api";
import ArticleCard from "./ArticleCard";
import ErrorHandling from "./ErrorHandling";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllArticles()
      .then((allArticles) => {
        setArticlesList(allArticles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return (
      <ErrorHandling
        status={error.response.status}
        message={error.response.data.msg}
      />
    );
  } else {
    return (
      <main>
        <h2>Articles</h2>
        <ArticleCard
          setArticles={setArticlesList}
          multipleArticles={articlesList}
        />
      </main>
    );
  }
};

export default ArticlesList;
