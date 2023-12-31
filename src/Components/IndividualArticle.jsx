import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle } from "../api";
import formatDate from "../Utils/utils"
import ArticleInfoBar from "./ArticleInfoBar";
import CommentsList from "./CommentsList";
import Votes from "./Votes";
import Stack from "@mui/material/Stack";
import ErrorHandling from "./ErrorHandling";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

const IndividualArticle = () => {
  const { article_id } = useParams("");
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getIndividualArticle(article_id)
      .then((articleRes) => {
        setArticle(articleRes);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [article_id]);


  if (isLoading) {
    return <h3>Loading...</h3>;
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
      <article style={{ background: "#212529" }}>
        <Container>
          <Card bg={"dark"} border="light" text="white" className="pt-2">
            <Card.Title className="m-3">{article.title}</Card.Title>
            <Card.Subtitle className="ms-4">
              {formatDate(article)}
            </Card.Subtitle>
            <Card.Body>
              <Card.Img alt="article image" src={article.article_img_url} />
              <Card.Text>{article.body}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Stack direction="row" spacing={2}>
                <ArticleInfoBar article={article} setArticle={setArticle} />
                <Votes article={article} setArticle={setArticle} />
              </Stack>
            </Card.Footer>
            <Card.Footer>
              <CommentsList article_id={article_id} />
            </Card.Footer>
          </Card>
        </Container>
      </article>
    );
  }
};

export default IndividualArticle;
