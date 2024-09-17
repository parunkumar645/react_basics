import React, { useState } from "react";
import "./Like.css";

export const Like = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false); // Track if user has liked

  function handleLike() {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true); // Mark as liked
    } else {
      setLikes(likes - 1);
      setLiked(false); // Mark as not liked
    }
  }

  return (
    <div className="container">
      <div>
        {" "}
        <p>Likes: {likes}</p>
        <i
          id="like"
          onClick={handleLike}
          className={`fa-solid fa-heart ${liked ? "liked" : ""}`}
        ></i>
      </div>
    </div>
  );
};
