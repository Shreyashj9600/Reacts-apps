import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    // Event handler function
    const handleClick = () => {
      setCount(count + 1); // Update the state to increment count
    };
  
    return (
      <div className="center">
        <p>Count: {count}</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  };
  

export default App;