import { useLocation, useParams } from "react-router-dom";

const ArticleByTopic = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [limitedArticles, setLimitedArticles] = useState([]);

    
  
  useEffect(() => {
    getAllArticles("coding").then((articlesByTopic) => {
      setLimitedArticles(articlesByTopic);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <main>
        <ArticleCard multipleArticles={limitedArticles} />
      </main>
    );
  }
}

export default ArticleByTopic