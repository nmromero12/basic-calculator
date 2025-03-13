
const defaultValue = 0;
let numBoolean = false;
let operatorBoolean = false;
let numOne = '';
let numTwo = '';
let operator;

const calculatorContent = document.querySelector('.display-box');
calculatorContent.textContent = defaultValue;


//Basic Operations
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

    return numOne/numTwo;
}

function exponent(numOne, numTwo) {
    return numOne ** numTwo;
}


function operate(operator, numOne, numTwo) {
    return operator(Number(numOne), Number(numTwo));
}


//make all number buttons functioning

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
    })
})



//functionality to operator buttons.
const clearButton = document.querySelector("#clear");

clearButton.addEventListener('click', () => {
    calculatorContent.textContent = defaultValue;
    numOne = '';
    numTwo = '';
    numBoolean = false;
    operatorBoolean = false;

})


const addButton = document.querySelector("#add")

addButton.addEventListener('click', () => {
    repeatedOperator();
    operator = add;
    

})
const minusButton = document.querySelector("#minus")

minusButton.addEventListener('click', () => {
    repeatedOperator();
    operator = subtract;
    

})
const multiplyButton = document.querySelector("#multiplication")

multiplyButton.addEventListener('click', () => {
    repeatedOperator();
    operator = multiply;
    

})
const divisionButton = document.querySelector("#division")

divisionButton.addEventListener('click', () => {
    repeatedOperator();
    operator = divide;
})


const equalButton = document.querySelector("#equal");

equalButton.addEventListener('click', () => {
    equalFunction();


})

const exponentButton = document.querySelector("#exponent");

exponentButton.addEventListener('click', () => {
    repeatedOperator();
    operator = exponent;
})


//functionality for chaining operators and equals. 


function equalFunction() {
    numOne = operate(operator, numOne, numTwo);
    calculatorContent.textContent=numOne;
    numTwo = '';
}


function repeatedOperator() {

    if (operatorBoolean) {
        equalFunction();
    } else {
        numBoolean = !numBoolean
        operatorBoolean =!operatorBoolean;
    }
}




