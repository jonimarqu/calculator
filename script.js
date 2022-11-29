function add(a, b) {  // from two operands
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function sum(operands) {  // from an array of operands
    return operands.reduce( (sum, item) => { return sum + item }, 0 )
};

function multiply(operands) {  // from an array of operands
    return operands.reduce( (factors, item) => { return factors * item }, 1 )
};

function power(a, b) {
    return a ** b;
};

function divide(a, b) {
    return a / b;
};

// in future gotta make all functions use arrays

function operate(operator, a, b) { // for when pressing equal, to call proper function
    return operator(a,b);
}

console.log(operate(divide,10,5)); // OK