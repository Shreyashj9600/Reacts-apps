import {add, sub, div, mult } from './Calc';

function App() {
    return (
        <>
            <ol>
                <li>Add of two number is {add(20, 30)}</li>
                <li>Sub of two number is {sub(30, 20)}</li>
                <li>Div of two number is {div(20, 30)}</li>
                <li>Mult of two number is {mult(20, 30)}</li>
            </ol>
        </>
    )
};

export default App;
