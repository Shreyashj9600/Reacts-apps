import React, { useState } from "react";

const App = () => {

    let showTime = new Date().toLocaleTimeString();

    let [oldTime, setNewTime] = useState(showTime)

    let continewCngTime = () => {
        showTime = new Date().toLocaleTimeString();
        setNewTime(showTime)
    }
    setInterval(continewCngTime, 1000);

    return (
        <>
            <h1>{oldTime}</h1>
        </>
    );
};

export default App;