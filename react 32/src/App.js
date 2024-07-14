import React, { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{ 
    // alert("hii");
    document.title = `you clickme ${count} times`;
    
  })

  return(
    <>
      <button onClick={()=>{setCount(count + 1)}}>click me! {count}</button>
    </>
  )
}

export default App;