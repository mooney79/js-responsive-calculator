/*
/////////////////////////////////////////////////////////////////////
///////////// KNOWN BUG/DESIRED FEATURES LIST ///////////////////////
////////////////////////////////////////////////////////////////////
* (HIGH PRIORITY) Secondary calculations break the calculator (IE 3*3*3 will calculate 9, but then
    the new operator isn't being added to calculation properly and the 3rd 3 is being appended to the 9).
* (HIGH PRIORITY) positive/negative button functional (add to front of array on first number.  How on 2nd?
    Then add a sort on the unpack to keep it in the "number" section for parseFloat once joined)

* (LOW PRIORITY) Scientific calculator functions (square, cube, exponent, sqrt, cube root, arb. root, log, sin, 
    cos, tan, sinh, cosh, tanh, "pi", "e")
* (LOW PRIORITY) Scientific calculator memory functions (mc, m+, m-, mr)
* (LOW PRIORITY) Make the calculator responsive so that when the browser is mobile size, the scientific 
    functions disappear
*/

///////////////////////////////////////
////// VARIABLE DECLARATIONS //////////
///////////////////////////////////////

/////// DOM ELEMENTS //////////////////
const $numberButtons = document.querySelectorAll(".number");
const $operatorButtons = document.querySelectorAll(".operator");
const $clearButton = document.querySelector(".clear");
const $equalButton = document.querySelector(".equal-sign");
const $decimalButton = document.querySelector(".decimal");
const $screen = document.querySelector(".calculator-screen");

var calculation = [];
let currentNum = [];

let firstNumber = 0;
let secondNumber = 0;
let currentOperator = '';
let screenDisplay = '0';

///////////////////////////////////////
////// EVENT LISTENERS  ///////////////
///////////////////////////////////////
for (let i = 0 ; i < $numberButtons.length; i++) {
   $numberButtons[i].addEventListener('click', () => {
     pushNumber($numberButtons[i].value);
   }); 
};

for (let i = 0 ; i < $operatorButtons.length; i++) {
    $operatorButtons[i].addEventListener('click', () => {
        pushOperator($operatorButtons[i].value);
    }); 
 };

$clearButton.addEventListener("click", () => {
//    console.log("Clear!")
    pushOperator("C");
})

$equalButton.addEventListener("click", () => {
//    console.log("=")
    calculate();
})

$decimalButton.addEventListener("click", () => {
    //    console.log("Clear!")
        pushDecimal($decimalButton.value);
    })
    

///////////////////////////////////////
////// UNPACK ARRAY FUNCTION //////////
///////////////////////////////////////

let marker = 0;
//let activeOperator = '';
function unpackArray(arr){
    for (i=0; i < arr.length; i++){
        if (currentOperator === '') {
            if (typeof arr[i] === 'number' || arr[i] === '.') {
                //Increment i without doing anything
            } else {
                currentOperator=arr[i];
                let arrToString = arr.join('').slice(0,i);
                firstNumber = parseFloat(arrToString);
                marker = i;
                let arrToString2 = arr.join('').slice(i+1);
                secondNumber = parseFloat(arrToString2);
            }
       }
    }
};


///////////////////////////////////////
////// BUTTON PRESS FUNCTIONS /////////
///////////////////////////////////////
function pushNumber(num){
    alert(num);
    calculation.push(parseInt(num));
    currentNum.push(num);
    screenDisplay = currentNum.join('');
    $screen.value = screenDisplay;
};

let operatorPressed = false;
function pushOperator(str){
    alert(str);
    console.log(str);
    if (str === "C") {
        calculation = [];
        firstNumber = 0;
        secondNumber = 0;
        currentOperator = '';
        operatorPressed = false;
        console.log(currentOperator);// DEBUGGIN
        screenDisplay = '0';
        $screen.value = screenDisplay;
        currentNum = [];
    } else {
        if (operatorPressed === true){   
            calculate();
            operatorPressed === false;
            currentNum = [];
        } else {
            $screen.value = screenDisplay;
            console.log(screenDisplay);
            calculation.push(str);
            operatorPressed = true;
            currentNum = [];
        }
    }
};

function calculate(){
    alert("=");
    unpackArray(calculation); 
    switch (currentOperator) {
        case '+':
            screenDisplay = add(firstNumber, secondNumber);

            break;
        case '*':
            screenDisplay = multiply(firstNumber, secondNumber);
            break;
        case `-`:
            screenDisplay = subtract(firstNumber, secondNumber);
            break;
        case '/':
            screenDisplay = divide(firstNumber, secondNumber);
            break;
        default:
            console.log("Something's busted");
    }
    currentOperator = '';
    operatorPressed = false;
    console.log(calculation);
    currentNum = [];
};

function pushDecimal(str){
    calculation.push(str);
    currentNum.push(str);
    screenDisplay = currentNum.join('');
    $screen.value = screenDisplay;
}

///////////////////////////////////////
////// MATHEMATICAL FUNCTIONS /////////
///////////////////////////////////////
function add(num1, num2){
    let result = num1 + num2;
    alert(`${firstNumber} ${currentOperator} ${secondNumber} = ${result}`);
    firstNumber = result;
    secondNumber = 0;
    console.log(currentOperator);
    calculation = [];
    calculation = [...firstNumber + ''].map(Number);
    cleanUp(calculation);
    $screen.value = calculation.join('');
    return result;
}

function multiply(num1, num2){
    let result = num1 * num2;
    alert(`${firstNumber} ${currentOperator} ${secondNumber} = ${result}`);
    firstNumber = result;
    secondNumber = 0;
    console.log(currentOperator);
    calculation = [];
    calculation = [...firstNumber + ''].map(Number);
    cleanUp(calculation);
    $screen.value = calculation.join('');
    return result;
}

function subtract(num1, num2){
    let result = num1 - num2;
    alert(`${firstNumber} ${currentOperator} ${secondNumber} = ${result}`);
    firstNumber = result;
    secondNumber = 0;
    console.log(currentOperator);
    calculation = [];
    calculation = [...firstNumber + ''].map(Number);
    cleanUp(calculation);
    $screen.value = calculation.join('');
    return result;
}

function divide(num1, num2){
    let result = num1 / num2;
    alert(`${firstNumber} ${currentOperator} ${secondNumber} = ${result}`);
    firstNumber = result;
    secondNumber = 0;
    console.log(currentOperator);
    calculation = [...firstNumber + ''].map(Number);
    cleanUp(calculation);
    $screen.value = calculation.join('');
    return result;
}


///////////////////////////////////////
////// Clean up NaN in results ////////
///////////////////////////////////////
function cleanUp(arr) {
    for (i=0; i < arr.length; i++){
        if (isNaN(arr[i])) {
            arr[i] = '.';
        }
    }
}