import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import DeleteComment from "./DeleteComment";
const CommentCard = ({ multipleComments, setCommentsList }) => {
  return (
    <ul>
      {multipleComments.map((comment) => {
        return (
          <li
            className="comment"
            key={comment.comment_id}
            style={{
              padding: "0rem",
              margin: "1rem",
              marginLeft: "3rem",
              marginRight: "3rem",
            }}
          >
            <p id="commentAuthor">{comment.author}</p>
            <p id="commentBody">{comment.body}</p>
            <section id="commentVote">
              <div>
                <ThumbUpAltSharpIcon />
                <span> {comment.votes}</span>
              </div>
              <DeleteComment id='deleteButton'
                commentAuthor={comment.author}
                commentId={comment.comment_id}
                setCommentsList={setCommentsList}
                multipleComments={multipleComments}
              />
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentCard;
