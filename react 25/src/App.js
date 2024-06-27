import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState();
  const [fullname, setFullname] = useState();
  const [lastName, setLastName] = useState();
  const [lastNameNew, setLastNameNew] = useState();

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value)
  }

  const inputEventTwo = (event)=> {
    setLastName(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setFullname(name)
    setLastNameNew(lastName)
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Hello {fullname} {lastNameNew}</h1>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={inputEvent}
          value={name}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={inputEventTwo}
          value={lastName}
        />
        <br /><br />

        <button type="submit" >submit</button>
      </form>
    </>
  );
};

export default App;