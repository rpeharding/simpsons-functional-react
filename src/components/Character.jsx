import React from "react";
import like from "../images/like.svg";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
const Character = ({
  character,
  quote,
  image,
  id,
  liked,
  onDeleteItem,
  onLike,
  characterDirection,
}) => {
  const characterDir = characterDirection.toLowerCase();
  return (
    <div className="character-container">
      <Name character={character} />
      <div className="quote-flex">
        <div>
          <Quote quote={quote} />
          <div className="flex">
            <Image className="icon" src={like} onClick={() => onLike(id)} />
            {liked && <p>liked!</p>}
            <button onClick={() => onDeleteItem(id)} className="btn">
              Delete
            </button>
          </div>
        </div>
        <Image className={characterDir} src={image} />
      </div>
    </div>
  );
};

export default Character;
