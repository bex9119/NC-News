import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import CommentSharpIcon from "@mui/icons-material/CommentSharp";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import TopicSharpIcon from "@mui/icons-material/TopicSharp";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { patchArticle } from "../api";

const ArticleCard = ({ multipleArticles}) => {

  return (
    <ul>
      {multipleArticles.map((article) => {
        return (
          <li key={article.article_id} className="articles">
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt="article image" />
            <Stack className="articleCard" direction="row" spacing={2}>
              <IconButton style={{ color: "inherit", fontSize: "inherit" }}>
                <CreateSharpIcon />
                <span> {article.author}</span>
              </IconButton>
              <IconButton style={{ color: "inherit", fontSize: "inherit" }}>
                <TopicSharpIcon />
                <span> {article.topic}</span>
              </IconButton>
              <IconButton style={{ color: "inherit", fontSize: "inherit" }}>
                <CommentSharpIcon />
                <span> {article.comment_count}</span>
              </IconButton>
              <IconButton
                style={{ color: "inherit", fontSize: "inherit" }}
              >
                <ThumbUpAltSharpIcon />
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
