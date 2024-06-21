import React from "react";
import ReactDom from "react-dom";
import add from "./App";
import App, { sub, div, mult } from './App'

ReactDom.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
)