import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

const App = () => {

  const [increment, setIncrement] = useState(0);


  const countInre = () => {
    setIncrement(increment + 1)
  };

  const countDecre = () => {
    if (increment > 0) {
      setIncrement(increment - 1)
    } else {
      setIncrement(0)
      alert("sorry, zero limit")
    }
  }
  return (
    <>
      <div>
        <div>
          <h1> {increment} </h1>

          <button onClick={countInre}>
            <AddIcon />
          </button>

          <button onClick={countDecre}>decrement</button>
        </div>
      </div>
    </>
  )
};

export default App;