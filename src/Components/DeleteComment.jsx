import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import IconButton from "@mui/material/IconButton";
import { deleteComment } from "../api";

const DeleteComment = ({ commentAuthor, commentId, setCommentsList }) => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
    const [isErr, setIsErr] = useState(false);
    
  const removeComment = () => {
    setIsLoading(true);
    deleteComment(commentId)
      .then(() => {
        setIsLoading(false);
        return setCommentsList((currComments) => {
          return [...currComments].filter((comment) => {
            return comment.comment_id !== commentId;
          });
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr(true);
      });
  };

  if (user.username === commentAuthor) {
    return (
      <IconButton
        onClick={() => {
          removeComment();
        }}
        style={{ color: "inherit", fontSize: "inherit" }}
      >
        <span>
          {isLoading ? "Deleting..." : ""}
          {isErr ? "Unable to delete, try again later" : ""}
        </span>
        <DeleteSharpIcon />
      </IconButton>
    );
  }
};

export default DeleteComment;
