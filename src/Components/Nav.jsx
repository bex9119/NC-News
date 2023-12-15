import { Link } from "react-router-dom";
import TopicsBar from "./TopicsBar";

const Nav = () => {
  return (
    <nav className="flex justify-left space-x-10">
      <Link to="/" className="text-blue-500 hover:text-blue-800 font-bold">
        Home
      </Link>
      <Link
        to="/articles"
        className="text-blue-500 hover:text-blue-800 font-bold"
      >
        Articles
      </Link >
      <TopicsBar />
    </nav>
  );
};

export default Nav;
