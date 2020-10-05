import React, { Component, useEffect } from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { firebaseApp } from "./firebase";
import { useStateValue } from "./StateProvider";
const App = () => {
  const [state, dispatch] = useStateValue();

  // useEffect(() => {
  //   firebaseApp.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     console.log("APP.JS");
  //     dispatch({
  //       type: "SET_USER",
  //       user: user,
  //     });
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
