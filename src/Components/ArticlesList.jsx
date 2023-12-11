import { useEffect, useState } from "react";
import getAllArticles from "../api";

const ArticlesList = () => {
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllArticles().then((allArticles) => {
            setArticlesList(allArticles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    else {
        return (
          <main>
                <h2>Articles</h2>
            <ul>
              {articlesList.map((article) => {
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
          </main>
        );
    }
};

export default ArticlesList;
