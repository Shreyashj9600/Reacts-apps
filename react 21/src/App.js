import React, { useState } from "react";

const App = () => {
    let purpal = '#34495e';
    const [bg, setBg] = useState(purpal);
    const [name, setName] = useState("click me!")

    const bgChange = () => {
        let yellow = 'yellow';
        setBg(yellow);
        setName('ohh')
    };
    const bgBack = () => {
        setBg(purpal)
        setName("click me!")
    };
    return (
        <>
            <div className="center" style={{ backgroundColor: bg }}>
                <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
            </div>
        </>
    );

};

export default App;