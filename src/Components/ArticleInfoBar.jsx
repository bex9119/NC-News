import CommentSharpIcon from "@mui/icons-material/CommentSharp";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import TopicSharpIcon from "@mui/icons-material/TopicSharp";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

const ArticleInfoBar = ({ article }) => {
  return (
    <section className=" flex px-6 pt-4 pb-2 flex">
      <IconButton 
        disabled={true}
        style={{ color: "inherit", fontSize: "inherit" }}
      >
        <CreateSharpIcon />
        <span> {article.author}</span>
      </IconButton>
      <IconButton
        disabled={true}
        style={{ color: "inherit", fontSize: "inherit" }}
      >
        <TopicSharpIcon />
        <span> {article.topic}</span>
      </IconButton>
      <IconButton
        disabled={true}
        style={{ color: "inherit", fontSize: "inherit" }}
      >
        <CommentSharpIcon />
        <span> {article.comment_count}</span>
      </IconButton>
    </section>
  );
};

export default ArticleInfoBar;
