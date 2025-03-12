//Basic Operations
let boolean = false;
let numOne = '';
let numTwo = '';
let operator;

const calculatorContent = document.querySelector('.display-box');
calculatorContent.textContent = 0;

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
        if (!boolean) {
            numOne += button.getAttribute('data-num');
            calculatorContent.textContent = numOne;
        } else {
            numTwo += button.getAttribute('data-num');
            calculatorContent.textContent = numTwo;
        }
    })
})


const addButton = document.querySelector("#add")

addButton.addEventListener('click', () => {
    boolean = !boolean;
    operator = add;

})
const minusButton = document.querySelector("#minus")

minusButton.addEventListener('click', () => {
    boolean = !boolean;
    operator = subtract;

})
const multiplyButton = document.querySelector("#multiplication")

multiplyButton.addEventListener('click', () => {
    boolean = !boolean;
    operator = multiply;

})
const divisionButton = document.querySelector("#division")

divisionButton.addEventListener('click', () => {
    boolean = !boolean;
    operator = divide;

})


const equalButton = document.querySelector("#equal");

equalButton.addEventListener('click', () => {
    boolean = !boolean;
    numOne = operate(operator, numOne, numTwo);
    calculatorContent.textContent=numOne;
    numTwo = '';


})




