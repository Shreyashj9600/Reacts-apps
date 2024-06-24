import './index.css'
import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(1)

    const incNum = () => {
        setCount(count + 1)

    }
    return (
        <div className="info">
            <h1> {count} </h1>

            <button onClick={incNum}>Click me!</button>
        </div>
    );
};

export default App;