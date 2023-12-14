import { Link } from "react-router-dom";
import ArticleInfoBar from "./ArticleInfoBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import formatDate from "../utils/utils";

const ArticleCard = ({ multipleArticles }) => {
  return (
    <ul>
      {multipleArticles.map((article) => {
        return (
          <li key={article.article_id} className="articles">
            <Link className="links" to={"/articles/" + article.article_id}>
              <h3>{article.title}</h3>
              <p>{formatDate(article) }</p>
              <img
                className="articleCardImg"
                src={article.article_img_url}
                alt="article image"
              />
            </Link>
            <Stack className="articleInfoBar" direction="row" spacing={2}>
              <ArticleInfoBar article={article} />
              <IconButton
                disabled={true}
                style={{ color: "inherit", fontSize: "inherit" }}
              >
                <FavoriteSharpIcon />
                <span>{article.votes}</span>
              </IconButton>
            </Stack>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleCard;
