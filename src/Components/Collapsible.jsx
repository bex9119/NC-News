import { useState } from "react";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

const Collapsible = ({ children }) => {
    const [isHidden, setIsHidden] = useState(true)

    const toggleView = () => {
        setIsHidden(!isHidden)
    }
    return (
      <Container className="text-center">
        {isHidden ? null : children}
        <Button id="collapse" onClick={toggleView}>
          {isHidden ? "View" : "Hide"} Comments
        </Button>
      </Container>
    );
}

export default Collapsible;