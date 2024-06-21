import React from "react";
import ReactDom from "react-dom";
import lng from "./App";
import { lng2 , myName} from "./App";

ReactDom.render(
  <>
    <ol>
      <li>React</li>
      <li>{lng}</li>
      <li>{lng2}</li>
      <li>{myName()}</li>
    </ol>
  </>,
  document.getElementById('root')
)