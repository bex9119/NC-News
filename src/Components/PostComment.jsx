import { useContext, useState } from "react";
import { postComment } from "../api";
import { UserContext } from "../Context/UserContext";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";

const PostComment = ({ article_id, setCommentsList }) => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [blankComment, setBlankComment] = useState({
    id: "",
    placeholder: "Comment...",
  });
  const [commentLengthErr, setCommentLengthErr] = useState('')

  const handleInput = (event) => {
    setCommentLengthErr("");
    if (newComment.length < 99){
      setNewComment(event.target.value);
    }
    else if (newComment.length >= 99) {
      setNewComment(event.target.value);
      setCommentLengthErr("You have reached the character limit");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment && newComment.length <= 100) {
      setIsLoading(true);
      setIsDisabled(true);
          setCommentLengthErr("");
      postComment(article_id, { username: user.username, body: newComment })
        .then((postedComment) => {
          setCommentsList((currComments) => {
            return [postedComment, ...currComments];
          });
          setNewComment("");
          setBlankComment({ id: "", placeholder: "Comment..." });
          setIsLoading(false);
          setIsDisabled(false);
        })
        .catch(() => {
          setTimeout(() => {
            setIsErr(false);
            setIsDisabled(false);
            setIsLoading(false);
          }, 2000);
          setIsErr(true);
        });
    }
    else {
      setBlankComment({
        id: "blankComment",
        placeholder: "Please enter a comment here.",
      });
    }
  };

  return (
    <>
      <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            onChange={handleInput}
            value={newComment}
            id={blankComment.id}
            placeholder={blankComment.placeholder}
            maxLength={100}
          />
         <Form.Text style={{color: 'white'}}>Limit 100 Characters</Form.Text>
        </Form.Group>
        <Button type="submit" disabled={isDisabled}>
          {isLoading ? "Please wait" : "Comment"}
        </Button>
      </Form>
      <section className="errorMsg">
        <p>{commentLengthErr ? commentLengthErr : ""}</p>
      </section>
      <p className="errorMsg">
        {isErr ? "Unable to comment, please try again later" : ""}
      </p>
    </>
  );
};

export default PostComment;
