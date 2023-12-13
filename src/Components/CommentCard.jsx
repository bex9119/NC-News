import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
const CommentCard = ({ multipleComments }) => {
  return (
    <ul>
      {multipleComments.map((comment) => {
        return (
          <li className="comment" key={comment.comment_id} style={{ "padding": "0rem", "margin": "1rem", "marginLeft": "3rem", "marginRight": "3rem" }}>
            <p id="commentAuthor">{comment.author}</p>
            <p id="commentBody">{comment.body}</p>
            <section id="commentVote">
              <ThumbUpAltSharpIcon />
              <span> {comment.votes}</span>
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentCard;
