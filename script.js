
 // DARK MOD // 
const cal = document.querySelector('.calculator-body')
const calculator = document.querySelector('.calculator')
const switches = document.querySelector('.slider')
const main = document.querySelector('.main')
var click = 0;
switches.addEventListener('click', ()=>{
cal.classList.toggle('dark')
click++;
if(click %2 == 0 ){
main.classList.remove('main-background-2')
main.classList.add('main-background-1')

}else{
main.classList.add('main-background-2')
main.classList.remove('main-background-1')


}
})



//Calculator//

const input_val = document.querySelector('.input-value')

let displayVal = '0'; 
let firstValue = null;
let operator = null;
let waitingforSecondValue = false;

updateDisplay();
function updateDisplay() {
input_val.value = displayVal;
input_val.value = displayVal.slice(0, 15);
}

cal.addEventListener('click', function (e) {
let element = e.target;
if (element.matches('.buttons')) return;
if (element.matches('.input-value')) return ;
if (element.matches('.cal-result')) return ;

if (element.classList.contains('operator')) {
console.log('operator', element.value);
handleOperator(element.value);
updateDisplay()

return;
};
if (element.classList.contains('clear')) {
console.log('clear', element.value);
clear();
updateDisplay()

return;
}

if (element.classList.contains('point')) {
console.log('point', element.value);
point();
updateDisplay()

return;
}

console.log(element.value);
valueDisplay(element.value);
updateDisplay()
});

function valueDisplay(num) {
if (waitingforSecondValue) {
if (!displayVal) {
displayVal = '0.';
} else {
displayVal = num;
}
waitingforSecondValue = false;
} else {
if (displayVal === '0') {
displayVal = num;
} else if (operator !== null) {
displayVal += num;
} else {
displayVal += num;
}
}
}



function clear() {
displayVal = '0';
firstValue = null;
operator = null;
waitingforSecondValue = false;
}
function point() {
if (waitingforSecondValue || !displayVal.includes('.')) {
displayVal = '0.';
waitingforSecondValue = false;
} else if (!displayVal.includes('.')) {
displayVal += '.';
}
}


function handleOperator(nextoperator) {
const value = parseFloat(displayVal);

let operatorText = '';
if (nextoperator === '+') {
operatorText = ' + ';
} else if (nextoperator === '-') {
operatorText = ' - ';
} else if (nextoperator === '*') {
operatorText = ' * ';
} else if (nextoperator === '/') {
operatorText = ' ÷ ';
}

if (operator && waitingforSecondValue) {
operator = nextoperator;
return;
}
if (firstValue === null) {
firstValue = value;
} else if (operator) {
const result = calculate(firstValue, value, operator);

displayVal = String(result);
firstValue = result;
}
waitingforSecondValue = true;
operator = nextoperator;

if (operator === '.' && !displayVal) {
displayVal = '0.';
}
}


function calculate(first, second, operator) {
if (operator === '+') {
return first + second;
} else if (operator === '-') {
return first - second;
} else if (operator === '*') {
return first * second;
} else if (operator === '/') {
return first / second;
}
return second;
}