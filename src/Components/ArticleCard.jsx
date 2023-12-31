import { Link } from "react-router-dom";
import ArticleInfoBar from "./ArticleInfoBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import formatDate from "../Utils/utils"
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CardGroup from "react-bootstrap/CardGroup"
import Container from "react-bootstrap/Container"

const ArticleCard = ({ multipleArticles }) => {
  if (multipleArticles.length > 1) {
    return (

      <CardGroup>
        <Row xs={1} md={2} xl={3} className="g-4">
          {multipleArticles.map((article) => {
            return (
              <Col key={article.article_id}>
                <div>
                  <Link
                    className="links"
                    to={"/articles/" + article.article_id}
                  >
                    <Card
                      bg={"dark"}
                      border="light"
                      text="white"
                      style={{ width: "100%" }}
                    >
                      <Card.Img
                        as={"img"}
                        variant="top"
                        src={article.article_img_url}
                        alt="article image"
                      />
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Subtitle>{formatDate(article)}</Card.Subtitle>
                        <Card.Text></Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-center">
                        <Stack
                          className="articleInfoBar"
                          direction="row"
                          spacing={2}
                        >
                          <ArticleInfoBar article={article} />
                          <IconButton
                            disabled={true}
                            style={{ color: "inherit", fontSize: "small" }}
                          >
                            <FavoriteSharpIcon />
                            <span>{article.votes}</span>
                          </IconButton>
                        </Stack>
                      </Card.Footer>
                    </Card>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </CardGroup>

    );
  }
  else {
    return (
          <CardGroup>
              {multipleArticles.map((article) => {
                return (
                  <Container key={article.article_id}>
                      <Link
                        className="links"
                        to={"/articles/" + article.article_id}
                      >
                        <Card
                          bg={"dark"}
                          border="light"
                          text="white"
                          style={{ width: "100%" }}
                        >
                          <Card.Img
                            as={"img"}
                            variant="top"
                            src={article.article_img_url}
                            alt="article image"
                          />
                          <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Subtitle>{formatDate(article)}</Card.Subtitle>
                            <Card.Text></Card.Text>
                          </Card.Body>
                          <Card.Footer className="text-center">
                            <Stack
                              className="articleInfoBar"
                              direction="row"
                              spacing={2}
                            >
                              <ArticleInfoBar article={article} />
                              <IconButton
                                disabled={true}
                                style={{ color: "inherit", fontSize: "small" }}
                              >
                                <FavoriteSharpIcon />
                                <span>{article.votes}</span>
                              </IconButton>
                            </Stack>
                          </Card.Footer>
                        </Card>
                      </Link>
                  </Container>
                );
              })}
          </CardGroup>)
  }
};

export default ArticleCard;
