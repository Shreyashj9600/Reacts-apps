import React, { useState } from "react";

const App = () => {

  const [fullname, setFullName] = useState({
    fName: '',
    lname: '',
    email: '',
    phone: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submited")
  }
  const inputEvent = (event) => {
    console.log(event.target.value);

    // const name = event.target.name;
    // const value = event.target.value;

    const { name, value } = event.target;

    setFullName((preVal) => {
      console.log(preVal);
      if (name === 'fName') {
        return {
          fName: value,
          lname: preVal.lname,
          email: preVal.email,
          phone: preVal.phone
        }
      } else if (name === 'lname') {
        return {
          fName: preVal.fName,
          lname: value,
          email: preVal.email,
          phone: preVal.phone
        }
      }
      else if (name === 'email') {
        return {
          fName: preVal.fName,
          lname: preVal.lname,
          email: value,
          phone: preVal.phone
        }
      }
      else if (name === 'phone') {
        return {
          fName: preVal.fName,
          lname: preVal.lname,
          email: preVal.email,
          phone: value
        }
      }
    })
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Hello {fullname.fName} {fullname.lname}</h1>
        <p>{fullname.email}</p>
        <p>{fullname.phone}</p>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={inputEvent}
          value={fullname.fName}
          name="fName"
        />
        <br /><br />
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={inputEvent}
          value={fullname.lname}
          name="lname"
        />
        <br /><br />
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={inputEvent}
          value={fullname.email}
          name="email"
        />
        <br /><br />
        <input
          type="number"
          placeholder="Enter your Phone number"
          onChange={inputEvent}
          value={fullname.phone}
          name="phone"
        />
        <br /><br />

        <button type="submit" >submit</button>
      </form>
    </>
  )
}

export default App;