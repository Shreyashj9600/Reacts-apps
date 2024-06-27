import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState();
  const [fullname, setFullname]= useState();

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value)
  }

  const onSubmit = ()=>{
    setFullname(name)
  }
  return (
    <>
      <h1>Hello {fullname}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={inputEvent}
        value={fullname}
      />
      <br /><br />

      <button onClick={onSubmit}>submit</button>
    </>
  );
};

export default App;