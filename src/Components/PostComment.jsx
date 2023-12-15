import { useContext, useEffect, useState } from "react";
import { postComment } from "../api";
import { UserContext } from "../Context/UserContext";

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
    console.log(newComment.length)
    if (newComment.length < 101){
      setNewComment(event.target.value);
    }
    else if (newComment.length > 100) {
      setIsDisabled(true);
      setCommentLengthErr("You have reached the character limit");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment && newComment.length <= 100) {
      setIsLoading(true);
      setIsDisabled(true);
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
      <form id="postCommentForm" onSubmit={handleSubmit}>
        <textarea
          className="postCommentArea"
          type="text"
          onChange={handleInput}
          value={newComment}
          id={blankComment.id}
          placeholder={blankComment.placeholder}
        ></textarea>
        <button disabled={isDisabled}>
          {isLoading ? "Please wait" : "Comment"}
        </button>
      </form>
      <section className="errorMsg">
        <p id='charLimit'>Limit 100 Characters</p>
        <p>{commentLengthErr ? commentLengthErr : ""}</p>
      </section>
      <p className="errorMsg">
        {isErr ? "Unable to comment, please try again later" : ""}
      </p>
    </>
  );
};

export default PostComment;
