import { Link } from "react-router-dom"

const Nav = () => {
    return (
      <nav>
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/articles" className="links">
          Articles
        </Link>
      </nav>
    );
}

export default Nav