import { Link } from "react-router-dom";
import ArticleInfoBar from "./ArticleInfoBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import formatDate from "../Utils/utils"

const ArticleCard = ({ multipleArticles }) => {
  return (
    <ul>
      {multipleArticles.map((article) => {
        return (
          <li
            key={article.article_id}
            className="max-w-sm rounded overflow-wrap shadow-lg"
          >
            <Link className="links" to={"/articles/" + article.article_id}>
              <h3 className="font-bold text-xl mb-2">{article.title}</h3>
              <p className="text-gray-700 text-base">{formatDate(article)}</p>
              <img
                className="w-full"
                src={article.article_img_url}
                alt="article image"
              />
            </Link>
            <section className=" flex">
              <ArticleInfoBar article={article} />
              <IconButton
                disabled={true}
                style={{ color: "inherit", fontSize: "inherit" }}
              >
                <FavoriteSharpIcon />
                <span>{article.votes}</span>
              </IconButton>
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleCard;
