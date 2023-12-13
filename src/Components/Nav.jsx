import { Link } from "react-router-dom"
import TopicsBar from "./TopicsBar";

const Nav = () => {
    return (
      <nav>
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/articles" className="links">
          Articles
        </Link>
        <TopicsBar />
      </nav>
    );
}

export default Nav