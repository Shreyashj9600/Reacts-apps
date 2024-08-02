import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={About} />
        <Route path="/contact" Component={Contact}/>
        <Route Component={Error} />
      </Routes>
    </>
  );
}

export default App;
