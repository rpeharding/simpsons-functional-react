import React from "react";
import Character from "./Character";
import Controls from "./Controls";
import Header from "./Header";
import { useState } from "react";
import Error from "./Error";
import { sortSimpsons } from "../utils";
import Joi from "joi";

const Interface = ({ simpsons, onDeleteItem, onLike, liked }) => {
  const [userInput, setUserInput] = useState("");
  const [sortSelection, setSortSelection] = useState("");
  const [errors, setErrors] = useState({});

  //   schema = { search: Joi.string().min(3).max(100) };

  const onInput = (e) => {
    setUserInput(e.target.value);
  };

  const onSortSelection = (e) => {
    setSortSelection(e.target.value);
  };

  console.log(sortSelection);

  let filtered = [...simpsons];
  if (userInput) {
    filtered = filtered.filter((simpson) => {
      return simpson.character.toLowerCase().includes(userInput.toLowerCase());
    });
    console.log(filtered);
  }

  //   const liked = simpsons.filter((simpson) => {
  //     return simpson.liked;
  //   });

  const count = liked.length;

  //these will be the items to display (its the last thing I'm doing)

  let sorted = sortSimpsons(filtered, sortSelection);

  return (
    <>
      <Header onInput={onInput} userInput={userInput} liked={count} />
      <Controls
        liked={count}
        className="controls"
        onSortSelection={onSortSelection}
      />
      {!sorted.length && <Error className="error" />}
      <div className="characters">
        {sorted.map((simpson) => {
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

export default Interface;
