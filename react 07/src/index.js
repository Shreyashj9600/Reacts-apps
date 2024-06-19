import React from 'react';
import ReactDom from 'react-dom';

const today = new Date().toLocaleDateString();
const crrTime = new Date().toLocaleTimeString();

ReactDom.render(
  <>
    <h1>Hello, My name is shreyash</h1>  
    <p>today date is {today}</p>
    <p>Current time is {crrTime}</p>
  </>,
  document.getElementById("root")
);