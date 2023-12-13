import { useEffect, useState } from "react";
import getAllArticles from "../api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((allArticles) => {
      setArticlesList(allArticles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
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
