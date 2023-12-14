import { useEffect, useState } from "react";
import getAllArticles from "../api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticleByTopic = () => {
  const [limitedArticles, setLimitedArticles] = useState([]);
  const { topic } = useParams("");
  const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    getAllArticles(topic)
      .then((articlesByTopic) => {
        setLimitedArticles(articlesByTopic);
        setIsLoading(false);
      })
      .catch((err) => {
                setError(err);
                setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return (
      <section>
        <h2>{error.response.status}</h2>
        <p>{error.response.data.msg}</p>
      </section>
    );
  }
  else {
    return (
      <main>
        <ArticleCard multipleArticles={limitedArticles} />
      </main>
    );
  }
};

export default ArticleByTopic;
