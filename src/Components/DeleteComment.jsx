import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Context/UserContext";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import IconButton from "@mui/material/IconButton";
import { deleteComment } from "../api";

const DeleteComment = ({commentAuthor, commentId, setCommentsList, multipleComments}) => {
    const { user } = useContext(UserContext)
    const [savedComments, setSavedComments] = useState([])

    useEffect(() => {
        setSavedComments(multipleComments)
    }, [])

    const removeComment = () => {
        setCommentsList((currComments) => {
                   return [...currComments].filter((comment) => {
                       return comment.comment_id !== commentId
                   })
               })
        deleteComment(commentId).catch(() => {
            setCommentsList(savedComments)
        })
    }

    if (user.username === commentAuthor) {
        return (
          <IconButton onClick={()=>{removeComment()}}
            style={{ color: "inherit", fontSize: "inherit" }}
            > 
            <DeleteSharpIcon />
          </IconButton>
        );
    }
}

export default DeleteComment