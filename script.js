let savedOperand;
let operation;

const functions = {
    add(a, b) {
    return Number(a) + Number(b);
    },

    subtract(a, b) {
    return a - b;
    },

    multiply(a, b) {
    return a * b;
    },

    power(a, b) {
    return a ** b;
    },

    divide(a, b) {
    return a / b;
    },
};

function operate(operator, a, b) { // for when pressing equal, to call proper function
console.log(operator)
    return functions[operator](a,b)
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(`.operator`);

const upperDisplay = document.querySelector(".upperDisplay");
const bigDisplay = document.querySelector(".bigDisplay");
const clearBttn = document.querySelector("#clear");
const powerBttn = document.querySelector("#power");
const percentBttn = document.querySelector("#percent");
const divideBttn = document.querySelector("#divide");
const multiplyBttn = document.querySelector("#multiply");
const takeBttn = document.querySelector("#take");
const addBttn = document.querySelector("#add");
const equalsBttn = document.querySelector("#equals");

clear.onclick = () => {
    bigDisplay.textContent = `0`;
    upperDisplay.textContent = ``;
};

numbers.forEach( (number)=> number.onclick = () => { appendNumber(number.textContent) } );

function appendNumber(number) {
    if ( number === "." && bigDisplay.textContent.includes(".") ) return;
    if ( number >= 0 && bigDisplay.textContent === `0` ) bigDisplay.textContent = ``;
    bigDisplay.textContent += number;
};

operators.forEach( (bttn) => bttn.onclick = () => { setOperator(bttn) } );

function setOperator (bttn) {
    console.log(bttn.id);
    operation = bttn.id;
    savedOperand = bigDisplay.textContent;
    upperDisplay.textContent = savedOperand + ` ` + bttn.textContent + ` `;
    bigDisplay.textContent = 0;
};

equalsBttn.onclick = () => {
    upperDisplay.textContent += bigDisplay.textContent;
    bigDisplay.textContent = operate( operation , savedOperand , bigDisplay.textContent )
};