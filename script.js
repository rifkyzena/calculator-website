const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number){
   // Replace current display value if firtst valu i snetered
   if(awaitingNextValue){
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
   } else {
    // If current display value is 0, replace it, if not, add more number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
   }
}

function addDecimal(){
    // iF OPERATOR Pressed, don't add decimal
    if (awaitingNextValue) return;
    // If no decimal, add one
    if (!calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    // Assign firstValue if no value
    if (!firstValue){
        firstValue = currentValue;
    } else {
        console.log('currentValue', currentValue);
    }
    // Ready for next value, store operator
    awaitingNextValue = true;
    operatorValue = operator;
    console.log('firstValue', firstValue);
    console.log('operator', operatorValue);
}

// add event listeners!!!!!!!!!! for numbers, operators, decimal
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDecimal());
    }
});

// rESET EVERY VALUES, DISplay
function resetAll(){
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}

// Event listener
clearBtn.addEventListener('click', resetAll);