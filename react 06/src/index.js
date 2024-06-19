import React from 'react';
import ReactDom from 'react-dom';

const fname = "shreyash";
const Lname = "jadhav";
ReactDom.render(
  <>
    <h1>{`my name is ${fname} ${Lname}`}</h1>
    <p>number is {Math.floor(Math.random() * 10)}</p>
  </>,
  document.getElementById("root")
);