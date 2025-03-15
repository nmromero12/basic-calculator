


const defaultValue = 0;
let numBoolean = false;
let operatorBoolean = false;
let equalBoolean = false;
let numOne = '';
let numTwo = '';
let operator;

const calculatorContent = document.querySelector('.display-box');
calculatorContent.textContent = defaultValue;

// Basic Operations
function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    if (numTwo == 0) {
        return "ERROR";
    }
    return numOne / numTwo;
}

function exponent(numOne, numTwo) {
    return numOne ** numTwo;
}

function operate(operator, numOne, numTwo) {
    return operator(Number(numOne), Number(numTwo));
}

// Make all number buttons functioning
const numButtons = document.querySelectorAll('[data-num]');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!numBoolean) {
            numOne += button.getAttribute('data-num');
            calculatorContent.textContent = numOne;
        } else {
            numTwo += button.getAttribute('data-num');
            calculatorContent.textContent = numTwo;
        }
        console.log(`numOne: ${numOne}, numTwo: ${numTwo}, operator: ${operator?.name}, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
    })
});

// Functionality for delete and clear buttons
const deleteButton = document.querySelector('#delete');
const clearButton = document.querySelector("#clear");

deleteButton.addEventListener('click', () => {
    if (equalBoolean) {
        numOne = numOne.toString().slice(0, -1);  
        calculatorContent.textContent = numOne || defaultValue;
    } 

    else {
        if (!numBoolean) {
            numOne = numOne.slice(0, -1); 
            calculatorContent.textContent = numOne || defaultValue;  
        } else {
            numTwo = numTwo.slice(0, -1); 
            calculatorContent.textContent = numTwo || defaultValue;  
        }
    }
    console.log(`Delete clicked - numOne: ${numOne}, numTwo: ${numTwo}, operator: ${operator?.name}, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
});

clearButton.addEventListener('click', () => {
    calculatorContent.textContent = defaultValue;
    numOne = '';
    numTwo = '';
    numBoolean = false;
    operatorBoolean = false;
    equalBoolean = false;
    console.log(`Clear clicked - numOne: ${numOne}, numTwo: ${numTwo}, operator: ${operator?.name}, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
});

// Functionality for operator buttons
const addButton = document.querySelector("#add");

addButton.addEventListener('click', () => {
    repeatedOperator();
    operator = add;
    console.log(`Operator selected: add, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
});

const minusButton = document.querySelector("#minus");

minusButton.addEventListener('click', () => {
    repeatedOperator();
    operator = subtract;
    console.log(`Operator selected: subtract, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
});

const multiplyButton = document.querySelector("#multiplication");

multiplyButton.addEventListener('click', () => {
    repeatedOperator();
    operator = multiply;
    console.log(`Operator selected: multiply, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
});

const divisionButton = document.querySelector("#division");

divisionButton.addEventListener('click', () => {
    repeatedOperator();
    operator = divide;
    console.log(`Operator selected: divide, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
});

const equalButton = document.querySelector("#equal");

equalButton.addEventListener('click', () => {
    equalFunction();
    console.log(`Equal button clicked - numOne: ${numOne}, numTwo: ${numTwo}, operator: ${operator?.name}, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
});

const exponentButton = document.querySelector("#exponent");

exponentButton.addEventListener('click', () => {
    repeatedOperator();
    operator = exponent;
    console.log(`Operator selected: exponent, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
});

// Functionality for chaining operators and equals
function equalFunction() {
    if (numOne != '' && numTwo != '' && operator) {
        numOne = operate(operator, numOne, numTwo);
        calculatorContent.textContent = numOne;
        numTwo = '';
        equalBoolean = false;
        console.log(`Equal function executed - numOne: ${numOne}, numTwo: ${numTwo}, operator: ${operator?.name}, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
    }
}

function repeatedOperator() {
    if (operatorBoolean) {
        equalFunction();
        equalBoolean = true;
        console.log(`Repeated operator (equalBoolean is true) - numOne: ${numOne}, numTwo: ${numTwo}, operator: ${operator?.name}, numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
    } else {
        numBoolean = !numBoolean;
        operatorBoolean = !operatorBoolean;
        equalBoolean = false;
        console.log(`Operator repeated - numBoolean: ${numBoolean}, operatorBoolean: ${operatorBoolean}, equalBoolean: ${equalBoolean}`);
    }
}

