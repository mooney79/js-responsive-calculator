/*
Known bug list
* I would like the Display to show firstNumber as it's being typed, then remain on firstNumber when an Operator
    is pressed, then show secondNumber as it's being typed -- WITHOUT showing the whole string.
* Secondary calculations (4+4+4) are no longer being resolved.
* Pressing an operator more than once (IE, 9**9) before calculate runs results in NaN.  Can I set something up
    so that it just takes the most recently pressed operator? Perhaps calcuate if there is a number between, else
    overwrite current operator with new
* Refactor switches into target.value, etc.
lets track currentOperator
console.log(currentOperator);
Okay.  When is it assigned?  unpack
When is it cleared? push C (thumbs up), after calculations are run, again IN EACH mathy function
When is it tested: In unpack(thumbs up) and in pushOper
*/

///////////////////////////////////////
////// VARIABLE DECLARATIONS //////////
///////////////////////////////////////

/////// DOM ELEMENTS //////////////////
const $numberButtons = document.querySelectorAll(".number");
const $operatorButtons = document.querySelectorAll(".operator");
const $clearButton = document.querySelector(".clear");
const $equalButton = document.querySelector(".equal-sign");
const $screen = document.querySelector(".calculator-screen");

var calculation = [];

let firstNumber = 0;
let secondNumber = 0;
let currentOperator = '';
let screenDisplay = '0';

///////////////////////////////////////
////// FIX 'numArray'  ////////////////
///////////////////////////////////////
const numArray = Array.from($numberButtons.keys());
let numArrayFix = [];

for (i=0; i < numArray.length; i++) {
    switch (numArray[i]) {
        case 0:
            numArrayFix[i] = 7;
            break;
        case 1:
            numArrayFix[i] = 8;
            break;
        case 2:
            numArrayFix[i] = 9;
            break;
        case 3:
            numArrayFix[i] = 4;
            break;
        case 4:
            numArrayFix[i] = 5;
            break;
        case 5:
            numArrayFix[i] = 6;
            break;
        case 6:
            numArrayFix[i] = 1;
            break;
        case 7:
            numArrayFix[i] = 2;
            break;
        case 8:
            numArrayFix[i] = 3;
            break;
        case 9:
            numArrayFix[i] = 0;
            break;
        default:
            console.log("Something's busted");
    } 
}

///////////////////////////////////////
////// ASSIGN OPERATOR DIVS VALUE  ////
///////////////////////////////////////
const operArray = Array.from($operatorButtons.keys());
for (i=0; i < operArray.length; i++) {
    switch (operArray[i]) {
        case 0:
            operArray[i] = '/';
        break;
        case 1:
            operArray[i] = '*';
            break;
        case 2:
            operArray[i] = `-`;
            break;
        case 3:
            operArray[i] = '+';
            break;
        default:
            console.log("Something's busted");
    } 
}

///////////////////////////////////////
////// EVENT LISTENERS  ///////////////
///////////////////////////////////////
for (let i = 0 ; i < $numberButtons.length; i++) {
   $numberButtons[i].addEventListener('click', () => {
       pushNumber(numArrayFix[i]);
   }); 
};

for (let i = 0 ; i < $operatorButtons.length; i++) {
    $operatorButtons[i].addEventListener('click', () => {
        pushOperator(operArray[i]);
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
                currentOperator = arr[i];
                console.log(currentOperator); //DEBUGGING
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
    calculation.push(num);
    screenDisplay = calculation.join('');
    $screen.value = screenDisplay;
};

//let operatorPressed = false;
function pushOperator(str){
//    alert(str);
    if (str === "C") {
        calculation = [];
        firstNumber = 0;
        secondNumber = 0;
        currentOperator = '';
        console.log(currentOperator);// DEBUGGIN
        screenDisplay = '0';
        $screen.value = screenDisplay;
    } else {
        if (currentOperator != ''){   
            calculate();
        } else {
            calculation.push(str);
            $screen.value = screenDisplay;
            //currentOperator = str; <--- this breaks things because it makes the IF statement in calculate
            //evaluate false
        }
    }
    console.log(screenDisplay);
};

function calculate(){
    //  alert(" = ");
    //  console.log("=");
    console.log(calculation);  //debugging tool
    unpackArray(calculation); 
    console.log(firstNumber, secondNumber, currentOperator); //debugging tool
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
    console.log(currentOperator);
    console.log(screenDisplay);        
};

///////////////////////////////////////
////// MATHEMATICAL FUNCTIONS /////////
///////////////////////////////////////
function add(num1, num2){
    let result = num1 + num2;
    firstNumber = result;
    secondNumber = 0;
    //currentOperator = '';
    console.log(currentOperator);
    calculation = [];
    calculation = [...firstNumber + ''].map(Number);
    cleanUp(calculation);
    $screen.value = calculation.join('');
    return result;
}

function multiply(num1, num2){
    let result = num1 * num2;
    firstNumber = result;
    secondNumber = 0;
//    currentOperator = '';
    console.log(currentOperator);
    calculation = [];
    calculation = [...firstNumber + ''].map(Number);
    cleanUp(calculation);
    $screen.value = calculation.join('');
    return result;
}

function subtract(num1, num2){
    let result = num1 - num2;
    firstNumber = result;
    secondNumber = 0;
//    currentOperator = '';
    console.log(currentOperator);
    calculation = [];
    calculation = [...firstNumber + ''].map(Number);
    cleanUp(calculation);
    $screen.value = calculation.join('');
    return result;
}

function divide(num1, num2){
    let result = num1 / num2;
    firstNumber = result;
    secondNumber = 0;
//    currentOperator = '';
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