import React from "react";
import ReactDom from "react-dom";
import Cards from "./Cards";
import './index.css';
import Sdata from "./Sdata";

const age = 20;
if (age >= 18) {
  console.log("you applide");
} else {
  console.log('you are not applide');
}

ReactDom.render(


  document.getElementById('root')
)