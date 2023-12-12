import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import CommentSharpIcon from "@mui/icons-material/CommentSharp";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import TopicSharpIcon from "@mui/icons-material/TopicSharp";
import Stack from "@mui/material/Stack";

const ArticleInfoBar = ({ article }) => {
  return (
    <Stack className="articleInfoBar" direction="row" spacing={2}>
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
  );
};

export default ArticleInfoBar;
