import React from "react";
import Character from "./Character";
import Controls from "./Controls";
import Header from "./Header";
import { useState } from "react";
import Error from "./Error";
import { sortSimpsons } from "../utils";
import Joi from "joi";
import { useLocalStorage } from "../hooks/storage";

const Interface = ({ simpsons, onDeleteItem, onLike, liked }) => {
  //   const [userInput, setUserInput] = useState({ search: "" });

  const [userInput, setUserInput] = useLocalStorage({
    key: "userInput",
    initialValue: { search: "" },
  });
  const [sortSelection, setSortSelection] = useState("");
  const [errors, setErrors] = useState({});

  const schema = { search: Joi.string().min(3).max(100) };

  const onInput = async (e) => {
    const newState = { ...userInput, [e.target.id]: e.target.value };

    if (newState.search.includes("fck" || "sht")) {
      setUserInput({ ...newState, search: "***" });
      return;
    }

    setUserInput(newState);
    const _joiInstance = Joi.object(schema);

    try {
      await _joiInstance.validateAsync(newState);
      setErrors(undefined);
    } catch (e) {
      console.log(e);
      const errorsMod = {};
      e.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });
      setErrors(errorsMod);
    }
  };

  const onSortSelection = (e) => {
    setSortSelection(e.target.value);
  };

  console.log(sortSelection);

  let filtered = [...simpsons];

  if (userInput.search) {
    filtered = filtered.filter((simpson) => {
      return simpson.character
        .toLowerCase()
        .includes(userInput.search.toLowerCase());
    });
  }

  const count = liked.length;

  //these will be the items to display (its the last thing I'm doing)

  let sorted = sortSimpsons(filtered, sortSelection);

  return (
    <>
      <Header
        onInput={onInput}
        userInput={userInput}
        liked={count}
        errors={errors}
        search={userInput.search}
      />
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
