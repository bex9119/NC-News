import { useState } from "react";
import ArticlesList from "./ArticlesList";
import QueryBar from "./QueryBar";
import { useSearchParams } from "react-router-dom";

const AllArticles = () => {
  const [order, setOrder] = useState("");
  const [sortBy, setSortBy] = useSearchParams({ sort_by: "created_at" });
  return (
    <>
      <QueryBar setOrder={setOrder} setSortBy={setSortBy} />
      <ArticlesList order={order} sortBy={sortBy} />
    </>
  );
};

export default AllArticles;
