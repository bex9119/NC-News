import { useEffect, useState } from "react"
import { getArticleComments } from "../api"
import CommentCard from "./CommentCard"
import Collabsible from "./Collapsible";

const CommentsList = () => {
    const [commentsList, setCommentsList] = useState([])

    useEffect(() => {
        getArticleComments().then((comments) => {
            setCommentsList(comments)
        })
    }, [])
    
    return (
      <>
        <Collabsible>
          <CommentCard multipleComments={commentsList} />
        </Collabsible>
      </>
    );
}

export default CommentsList

//after lunch show comments button