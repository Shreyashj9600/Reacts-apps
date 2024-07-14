import React, { useContext } from "react";
import ComC from './ComC';
import { fristName, lastName } from "./App";

const ComB = () => {
    const fName = useContext(fristName);
    const lName = useContext(lastName);

    return (
        <>
            <h1>my name is {fName} {lName}</h1>
        </>
    );

};

export default ComB;