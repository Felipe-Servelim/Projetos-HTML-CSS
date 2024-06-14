const calculatorScreen = document.getElementById('calculator-screen');
const keys = document.querySelector('.calculator-keys');

let currentInput = '';
let operator = '';
let previousInput = '';

keys.addEventListener('click', (event) => {
    const { target } = event;
    const { value } = target;
    
    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(value);
            break;
        case '=':
            calculate();
            break;
        case 'C':
            clearScreen();
            break;
        default:
            inputDigit(value);
    }

    updateScreen();
});

function handleOperator(nextOperator) {
    if (currentInput === '') return;
    
    if (operator && previousInput !== '') {
        calculate();
    }
    
    operator = nextOperator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result;
    operator = '';
    previousInput = '';
}

function inputDigit(digit) {
    currentInput = currentInput === '' ? digit : currentInput + digit;
}

function clearScreen() {
    currentInput = '';
    operator = '';
    previousInput = '';
}

function updateScreen() {
    calculatorScreen.value = currentInput;
}
