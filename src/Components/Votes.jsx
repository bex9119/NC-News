import IconButton from "@mui/material/IconButton";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import Stack from "@mui/material/Stack";
import { patchArticle } from "../api";
import { useState } from "react";

const Votes = ({ article, setArticle }) => {
  const [beenClicked, setbeenClicked] = useState(false);
  const [buttonColour, setButtonColour] = useState("notLiked");

  const setToLiked = () => {
    setArticle((currArticle) => {
      return { ...currArticle, votes: currArticle.votes + 1 };
    });
    setbeenClicked(true);
    setButtonColour("liked");
  };

  const removeLike = () => {
    setArticle((currArticle) => {
      return { ...currArticle, votes: currArticle.votes - 1 };
    });
    setbeenClicked(false);
    setButtonColour("notLiked");
  };

  const changeVotes = () => {
    if (beenClicked) {
      patchArticle(article.article_id, { inc_votes: -1 }).catch((err) => {
        setToLiked();
      });
      removeLike();
    } else {
      patchArticle(article.article_id, { inc_votes: +1 }).catch((err) => {
        removeLike();
      });
      setToLiked();
    }
  };

  return (
    <Stack className="articleCard" direction="row" spacing={0}>
      <IconButton
        id={buttonColour}
        onClick={() => {
          changeVotes();
        }}
        style={{ color: { buttonColour }, fontSize: "inherit" }}
      >
        <FavoriteSharpIcon />
        <span>{article.votes}</span>
      </IconButton>
    </Stack>
  );
};

export default Votes;
