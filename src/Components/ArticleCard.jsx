import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import CommentSharpIcon from "@mui/icons-material/CommentSharp";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import TopicSharpIcon from "@mui/icons-material/TopicSharp";
import Stack from "@mui/material/Stack";
import CommentsList from "./CommentsList";

const ArticleCard = ({ multipleArticles }) => {
  return (
    <ul>
      {multipleArticles.map((article) => {
        return (
          <li key={article.article_id} className="articles">
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt="article image" />
            <Stack className="articleCard" direction="row" spacing={2}>
              <section>
                <CreateSharpIcon />
                <span> {article.author}</span>
              </section>
              <section>
                <TopicSharpIcon />
                <span> {article.topic}</span>
              </section>
              <section>
                <CommentSharpIcon />
                <span> {article.comment_count}</span>
              </section>
              <section>
                <ThumbUpAltSharpIcon />
                <span> {article.votes}</span>
              </section>
            </Stack>
            <CommentsList />
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleCard;
