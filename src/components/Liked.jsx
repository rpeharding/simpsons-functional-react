import React from "react";
import Character from "./Character";
import Nav from "./Nav";
import NoLikes from "./NoLikes";

const Liked = ({ liked, onDeleteItem, onLike, count }) => {
  return (
    <>
      <div className="nav">
        <Nav liked={count} />
      </div>

      <div className="characters">
        {!liked.length && <NoLikes className="no-likes" />}
        {liked.map((simpson) => {
          return (
            <Character
              key={simpson.id}
              id={simpson.id}
              liked={simpson.liked}
              {...simpson}
              onDeleteItem={onDeleteItem}
              onLike={onLike}
            />
          );
        })}
      </div>
    </>
  );
};

export default Liked;
