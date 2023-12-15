import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <h1 className="text-3xl font-bold underline text-red-500">NC News</h1>
      <p>{user.username}</p>
      <img className="userAvatar" src={user.avatar_url} />
    </header>
  );
};

export default Header;
