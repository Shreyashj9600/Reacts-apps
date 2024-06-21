import React from "react";

function App() {

    let currDate = new Date();
    currDate = currDate.getHours();
    let greating = '';
    let cssStyle = {};

    if (currDate >= 1 && currDate < 12) {
        greating = 'Good Morning';
        cssStyle.color = 'green'
    } else if (currDate >= 12 && currDate <= 19) {
        greating = 'Good Afternoon'
        cssStyle.color = 'orange'
    } else {
        greating = 'Good Night'
        cssStyle.color = 'black'
    }
    return (
        <>
            <h1 className='heading'>Hello sir,<span style={cssStyle}>{greating}</span></h1>
        </>
    );
};

export default App;