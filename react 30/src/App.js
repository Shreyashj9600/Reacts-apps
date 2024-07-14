import React, { createContext } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ComA from "./ComA";

const fristName = createContext();
const lastName = createContext();

const App = () => {

  return (
    <>
      <fristName.Provider value={"shreyash"}>
        <lastName.Provider value={"jdhav"}>
          <ComA />
        </lastName.Provider>
      </fristName.Provider>
    </>
  )
};

export default App;
export { fristName, lastName }