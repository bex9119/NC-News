import { useEffect, useState } from "react"
import { getArticleComments } from "../api"
import CommentCard from "./CommentCard"
import Collapsible from "./Collapsible";
import PostComment from "./PostComment";

const CommentsList = ({article_id}) => {
  const [commentsList, setCommentsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleComments(article_id).then((comments) => {
          setCommentsList(comments)
          setIsLoading(false)
        })
    }, [])
    
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  else {
    return (
      <>
        <Collapsible>
          <h3>Comments:</h3>
          <p>{commentsList.length === 0 ? 'Be the first to comment!' : '' }</p>
          <PostComment article_id={article_id} setCommentsList={setCommentsList } />
          <CommentCard multipleComments={commentsList} setCommentsList={setCommentsList} />
        </Collapsible>
      </>
    );
  }
}

export default CommentsList