//Basic Operations
const defaultValue = 0;
let numBoolean = false;
let operatorBoolean = false;
let numOne = '';
let numTwo = '';
let operator;

const calculatorContent = document.querySelector('.display-box');
calculatorContent.textContent = defaultValue;

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
        return "Error";
    }

    return numOne/numTwo;
}

function exponent(numOne, numTwo) {
    return numOne ** numTwo;
}


function operate(operator, numOne, numTwo) {
    return operator(Number(numOne), Number(numTwo));
}


//make all number buttons functioning

const buttons = document.querySelectorAll('[data-num]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!numBoolean) {
            numOne += button.getAttribute('data-num');
            calculatorContent.textContent = numOne;
        } else {
            numTwo += button.getAttribute('data-num');
            calculatorContent.textContent = numTwo;
        }
    })
})

const clearButton = document.querySelector("#clear");

clearButton.addEventListener('click', () => {
    calculatorContent.textContent = defaultValue;
    numOne = '';
    numTwo = '';
    numBoolean = false;

})


const addButton = document.querySelector("#add")

addButton.addEventListener('click', () => {
    operator = add;
    if (operatorBoolean) {
        equalFunction();
    } else {
        numBoolean = !numBoolean
        operatorBoolean =!operatorBoolean;
    }

})
const minusButton = document.querySelector("#minus")

minusButton.addEventListener('click', () => {
    numBoolean = !numBoolean;
    operator = subtract;

})
const multiplyButton = document.querySelector("#multiplication")

multiplyButton.addEventListener('click', () => {
    numBoolean = !numBoolean;
    operator = multiply;

})
const divisionButton = document.querySelector("#division")

divisionButton.addEventListener('click', () => {
    numBoolean = !numBoolean;
    operator = divide;

})


const equalButton = document.querySelector("#equal");

equalButton.addEventListener('click', () => {
    equalFunction();


})


function equalFunction() {
    numOne = operate(operator, numOne, numTwo);
    calculatorContent.textContent=numOne;
    numTwo = '';
}


function repeatedOperator() {
    
}




