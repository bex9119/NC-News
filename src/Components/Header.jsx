import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <Navbar
      className="bg-body-tertiary justify-content-between"
      style={{padding: 10}}
      data-bs-theme="dark"
    >
      <Navbar.Brand>NC News</Navbar.Brand>
      <Container className="justify-content-end">
        <Navbar.Text style={{paddingRight: 20}}>{user.username}</Navbar.Text>
        <img
          src={user.avatar_url}
          width="40"
          height="40"
        />
      </Container>
    </Navbar>
  );
};

export default Header;
