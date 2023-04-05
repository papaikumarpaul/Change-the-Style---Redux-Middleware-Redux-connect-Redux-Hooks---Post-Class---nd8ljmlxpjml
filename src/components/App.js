import React from "react";
import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { changeColor, changeStyle } from "../actions/index.js";

const App = () => {
  const dispatch = useDispatch();
  //code here
  // const colorState = useSelector((state) => state.value);
  const colorState = useSelector((state) => state.color);
  const styleState = useSelector((state) => state.style);
  const changeButtonColor = () => {
    // console.log("color change");
    dispatch(changeColor(colorState === "red" ? "green" : "red"));
  };
  const changeButtonStyle = () => {
    // console.log("style change");
    dispatch(changeStyle(styleState === "Arial" ? "Georgia" : "Arial"));
  };
  return (
    <div id="main">
      <h1 id="text" style={{ color: colorState, fontFamily: styleState }}>
        Newton School
      </h1>
      <button id="colorBtn" onClick={changeButtonColor}>
        Change Color
      </button>
      <button id="styleBtn" onClick={changeButtonStyle}>
        Change Style
      </button>
    </div>
  );
};

export default App;
