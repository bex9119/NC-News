import { useEffect, useState } from "react";
import { getArticleComments } from "../api";
import CommentCard from "./CommentCard";
import Collapsible from "./Collapsible";
import PostComment from "./PostComment";
import ErrorHandling from "./ErrorHandling";
import Card from "react-bootstrap/Card"

const CommentsList = ({ article_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleComments(article_id)
      .then((comments) => {
        setCommentsList(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return (
      <ErrorHandling
        status={error.response.status}
        message={error.response.data.msg}
      />
    );
  } else {
    return (
      <>
        <Collapsible>
          <Card.Title>Comments:</Card.Title>
          <Card.Subtitle>{commentsList.length === 0 ? "Be the first to comment!" : ""}</Card.Subtitle>
          <PostComment
            article_id={article_id}
            setCommentsList={setCommentsList}
          />
          <CommentCard
            multipleComments={commentsList}
            setCommentsList={setCommentsList}
          />
        </Collapsible>
      </>
    );
  }
};

export default CommentsList;
