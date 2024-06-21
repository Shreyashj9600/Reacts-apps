function add(num1, num2) {
    let result = num1 + num2;
    return (result)
}

function sub(num1, num2) {
    let result = num1 - num2;
    return (result)
}

function div(num1, num2) {
    let result = num1 / num2;
    result = result.toFixed(2)
    return (result)
}

function mult(num1, num2) {
    let result = num1 * num2;
    return (result)
}


export {add, sub, div, mult };