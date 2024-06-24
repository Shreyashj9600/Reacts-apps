import React, { useState } from "react";

const App = () => {
    let currTime = new Date().toLocaleTimeString();

    let [Time, setTime] = useState(currTime);

    const refreshTime = () => {
        currTime = new Date().toLocaleTimeString();
        setTime(currTime)
    }

    return (
        <>
            <div className="center" >
                <h1> {Time} </h1>
                <button onClick={refreshTime}>Get Current Time</button>
            </div>

        </>
    );
};

export default App;