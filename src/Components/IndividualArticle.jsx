import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle } from "../api";
import formatDate from "../utils/utils";

const IndividualArticle = () => {
  const {article_id} = useParams();
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getIndividualArticle(article_id)
      .then((articleRes) => {
        setArticle(articleRes);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return (
      <section>
        <h2>{error.response.status}</h2>
        <p>{error.response.data.msg}</p>
      </section>
    );
  } else {
    return (
      <article>
        <header>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{formatDate(article)}</p>
        </header>
        <img src={article.article_img_url} />
        <main>
          <p>{article.body}</p>
          <p>Votes: {article.votes}</p>
        </main>
      </article>
    );
  }
};

export default IndividualArticle;
