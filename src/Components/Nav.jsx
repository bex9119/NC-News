import { Link } from "react-router-dom";
import TopicsBar from "./TopicsBar";
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      bg="secondary"
      data-bs-theme="light"
      sticky="top"
      variant="light"
    >
      <Container className="justify-content-center">
        <Nav variant="underline">
          <Nav.Item>
            <LinkContainer to="/" style={{ color: "white" }}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/articles" style={{ color: "white" }}>
              <Nav.Link>Articles</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <TopicsBar />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
