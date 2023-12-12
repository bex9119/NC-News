
import { Link } from "react-router-dom";
import ArticleInfoBar from "./ArticleInfoBar";
import IconButton from "@mui/material/IconButton";
import { patchArticle } from "../api";

const ArticleCard = ({ multipleArticles}) => {

  return (
    <ul>
      {multipleArticles.map((article) => {
        return (
          <li key={article.article_id} className="articles">
            <Link className="links" to={'/articles/' + article.article_id}>
            <h3>{article.title}</h3>
              <img className="articleCardImg" src={article.article_img_url} alt="article image" />
              </Link>
            <ArticleInfoBar article={article} />
            </li>
            
        );
      })}
    </ul>
  );
};

export default ArticleCard;
