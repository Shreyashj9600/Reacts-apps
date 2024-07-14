import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(1)
  const [num, setNum] = useState(1);

  useEffect(() => {
    alert("update the value")
  },[count])

  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>count Increment {count} </button>

      <button onClick={() => { setNum(num + 1) }}>count Increment {num} </button>

    </>
  )
};

export default App;