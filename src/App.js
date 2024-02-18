import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import spinner from "./images/spinner.png";
import Interface from "./components/Interface";
import Liked from "./components/Liked";
import InvalidUrl from "./components/InvalidUrl";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  const [simpsons, setSimpsons] = useState();

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((item) => {
      item.id = Math.random() + "" + Date.now();
      item.liked = false;
    });
    setSimpsons(data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const onDeleteItem = (id) => {
    const simpsonCopy = [...simpsons];
    const index = simpsonCopy.findIndex((item) => item.id === id);
    simpsonCopy.splice(index, 1);
    setSimpsons(simpsonCopy);
  };

  const onLike = (id) => {
    const simpsonCopy = [...simpsons];
    const index = simpsonCopy.findIndex((item) => item.id === id);
    simpsons[index].liked = !simpsons[index].liked;
    setSimpsons(simpsonCopy);
  };

  if (!simpsons) {
    return (
      <div className="spin-container">
        <img className="spinner" src={spinner} />
      </div>
    );
  }

  const liked = simpsons.filter((simpson) => {
    return simpson.liked;
  });

  const count = liked.length;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Interface
              simpsons={simpsons}
              onDeleteItem={onDeleteItem}
              onLike={onLike}
              liked={liked}
            />
          }
        />
        <Route
          path="liked"
          element={
            <Liked
              liked={liked}
              onDeleteItem={onDeleteItem}
              onLike={onLike}
              count={count}
            />
          }
        />
        <Route path="*" element={<InvalidUrl />} />
      </Routes>
    </>
  );
};

export default App;
