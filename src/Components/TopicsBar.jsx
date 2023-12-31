import { useEffect, useState } from "react";
import { getAllTopics } from "../api";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const TopicsBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <>
      {topics.map((topic) => {
        return (
          <Nav.Item key={topic.slug}>
            <LinkContainer
              to={"/articles/topics/" + topic.slug}

              style={{ color: "white" }}
            >
              <Nav.Link>
                {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        );
      })}
    </>
  );
};

export default TopicsBar;
