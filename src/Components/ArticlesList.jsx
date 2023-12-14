import { useEffect, useState } from "react";
import getAllArticles from "../api";
import ArticleCard from "./ArticleCard";
import Order from "./Order";
import SortBy from "./SortBy";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState('desc')
  const [sortBy, setSortBy] = useState('created_at')

  useEffect(() => {
    getAllArticles(order, sortBy).then((allArticles) => {
      setArticlesList(allArticles);
      setIsLoading(false);
    });
  }, [order, sortBy]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <main>
        <h2>Articles</h2>
        <Order setOrder={setOrder} />
        <SortBy setSortBy={setSortBy}/>
        <ArticleCard
          setArticles={setArticlesList}
          multipleArticles={articlesList}
        />
      </main>
    );
  }
};

export default ArticlesList;
