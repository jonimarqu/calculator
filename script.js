let savedOperand;
let currentOperand;
let operation;
let result;

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
    result = functions[operator](a,b)
    savedOperand = result;
    return result;
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(`.operator`);

const upperDisplay = document.querySelector(".upperDisplay");
const bigDisplay = document.querySelector(".bigDisplay");
const clearBttn = document.querySelector("#clear");
const percentBttn = document.querySelector("#percent");
const equalsBttn = document.querySelector("#equals");

clear.onclick = () => {
    bigDisplay.textContent = `0`;
    upperDisplay.textContent = ``;
    savedOperand = null;
    operation = null;
};

numbers.forEach( (number)=> number.onclick = () => { appendNumber(number.textContent) } );

function appendNumber(number) {
    if (result) bigDisplay.textContent = 0;
    if ( number === "." && bigDisplay.textContent.includes(".") ) return;
    if ( number >= 0 && bigDisplay.textContent === `0` ) bigDisplay.textContent = ``;
    bigDisplay.textContent += number;
};

operators.forEach( (bttn) => bttn.onclick = () => { setOperator(bttn) } );

function setOperator (bttn) {


    if (operation === bttn.id ) return;  // if same then return, if diff then change operator

 /*   
    // use result so that i can keep using last one DEBE EQUALIZAR
    if (result) {
        bigDisplay = 0;
    }
*/

    operation = bttn.id;

    if (!savedOperand) {
        savedOperand = bigDisplay.textContent;
        upperDisplay.textContent = savedOperand + ` ` + bttn.textContent + ` `;
        bigDisplay.textContent = 0;
    } else {
        upperDisplay.textContent = savedOperand + ` ` + bttn.textContent + ` `;
    }
};

equalsBttn.onclick = () => {
    upperDisplay.textContent += bigDisplay.textContent + ` = `;
    bigDisplay.textContent = operate( operation , savedOperand , bigDisplay.textContent )
};