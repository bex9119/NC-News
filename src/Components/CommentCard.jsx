import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import DeleteComment from "./DeleteComment";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const CommentCard = ({ multipleComments, setCommentsList }) => {
  return (
<Container>
      {multipleComments.map((comment) => {
        return (
          <Row key={comment.comment_id } className="m-2">
              <Card
                bg={"dark"}
                border="primary"
                text="white"
                style={{ width: "100%" }}
                >
                <Card.Header>{comment.author}</Card.Header>
                <Card.Body>{comment.body}</Card.Body>
                <Card.Footer id="commentVote">
                  <div>
                    <ThumbUpAltSharpIcon />
                    <span> {comment.votes}</span>
                  </div>
                  <DeleteComment
                    id="deleteButton"
                    commentAuthor={comment.author}
                    commentId={comment.comment_id}
                    setCommentsList={setCommentsList}
                    multipleComments={multipleComments}
                  />
                </Card.Footer>
              </Card>
          </Row>
        );
      })}
</Container>
  );
};

export default CommentCard;
