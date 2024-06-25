import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState();
  const [fullName, setFullname]= useState()

  const inputEvent = (event) => {
    console.log(event.target.value);
    setData(event.target.value)
  };
  const onSubmit = (e) => {
    setFullname(data)
  }
  return (
    <>
      <div>
        <h1> Hello {fullName} </h1>
        <input
          type="text"
          placeholder="Enter your name"
          Value={data}
          onChange={inputEvent}
        />
        <button onClick={onSubmit}> Submit </button>
      </div>
    </>
  );
};

export default App;
