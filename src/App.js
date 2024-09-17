import { useState } from "react";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleDislike() {
    setDislikes(dislikes + 1);
  }

  return (
    <div className="container">
      <p>Likes: {likes}</p>
      <p>Dislikes: {dislikes}</p>
      <div className="icons">
        <i id="like" onClick={handleLike} className="fa-solid fa-heart"></i>
        <i
          id="dislike"
          onClick={handleDislike}
          className="fa-solid fa-thumbs-down"
        ></i>
      </div>
    </div>
  );
}

export default App;
