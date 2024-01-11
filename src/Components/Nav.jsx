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
      className="justify-content-center"
    >
        <Nav variant="underline" className="justify-content-center">
          <Nav.Item style={{ marginRight: -10 }}>
            <LinkContainer to="/" style={{ color: "white" }}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item style={{ marginRight: -15 }}>
            <LinkContainer to="/articles" style={{ color: "white" }}>
              <Nav.Link>Articles</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <TopicsBar />
        </Nav>
    </Navbar>
  );
};

export default Navigation;
