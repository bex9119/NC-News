import { useEffect, useState } from "react";
import getAllArticles from "../api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticleByTopic = () => {
  const [limitedArticles, setLimitedArticles] = useState([]);
  const { topic } = useParams("");

  useEffect(() => {
    getAllArticles(topic)
      .then((articlesByTopic) => {
        setLimitedArticles(articlesByTopic);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic]);

    return (
      <main>
        <ArticleCard multipleArticles={limitedArticles} />
      </main>
    );
};

export default ArticleByTopic;
