import { useEffect, useState } from "react";
import getAllArticles from "../api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import ErrorHandling from "./ErrorHandling";

const ArticlesList = ({order, sortBy}) => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams("");
  const [error, setError] = useState(null);

  useEffect(() => {
        setIsLoading(true)
    getAllArticles(topic, order, sortBy)
      .then((allArticles) => {
        setArticlesList(allArticles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [topic ,order, sortBy]);

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
