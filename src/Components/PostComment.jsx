import { useContext, useState } from "react"
import { postComment } from "../api"
import { UserContext } from "../Context/UserContext";

const PostComment = ({ article_id }) => {
    const { user } = useContext(UserContext);
    //this is in comments list
    const [commentsList, setCommentsList] = useState([])
    const [newComment, setNewComment] = useState('')
    const [blankComment, setBlankComment] = useState({id: '', placeholder: 'Comment...'})

    const handleInput = (event) => {
        setNewComment(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (newComment) {
            postComment(article_id, { username: user.username, body: newComment })

            setCommentsList((currComments) => {
                return [newComment, ...currComments]
            })
            setNewComment('')
            setBlankComment({id: '', placeholder: 'Comment...'})
        }
        else {
            setBlankComment({ id: "blankComment", placeholder: "Please enter a comment here." });
        }
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={newComment}
          id={blankComment.id}
          placeholder={blankComment.placeholder}
        ></input>
        <button>Comment</button>
      </form>
    );
}

export default PostComment