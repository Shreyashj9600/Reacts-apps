import React from "react";
import { fristName, lastName } from "./App";

const ComC = () => {
    return (
        <>
            <fristName.Consumer>
                {(fName) => {
                    return (
                        <lastName.Consumer>
                            {(lName) => {
                                return <h1>my name is {fName} {lName}</h1>
                            }}
                        </lastName.Consumer>
                    )
                }}
            </fristName.Consumer>
        </>
    );

};

export default ComC;