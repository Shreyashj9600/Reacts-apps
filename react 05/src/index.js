import React from 'react';
import ReactDom from 'react-dom';

const name = "shreyash jadhav"

ReactDom.render(
  <>
    <h1>ma name is {name}</h1>
    <p>number is {Math.floor(  Math.random() * 10)}</p>
  </>,
  document.getElementById("root")
);