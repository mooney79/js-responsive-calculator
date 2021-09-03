/*
Known bug list
* I would like the Display to show firstNumber as it's being typed, then remain on firstNumber when an Operator
    is pressed, then show secondNumber as it's being typed -- WITHOUT showing the whole string.
* Secondary calculations (4+4+4) are no longer being resolved.
* Sometimes after equal is pressed, display shows result when another operator is pressed, sometimes it shows
    the previous string
* Pressing an operator more than once (IE, 9**9) before calculate runs results in NaN.  Can I set something up
    so that it just takes the most recently pressed operator?
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
////// NUMBER EVENT LISTENERS  ////////
///////////////////////////////////////

$numberButtons[0].addEventListener("click", () => {
//    console.log(numArrayFix[0]);
    pushNumber(numArrayFix[0]);
});
$numberButtons[1].addEventListener("click", () => {
//    console.log(numArrayFix[1]);
    pushNumber(numArrayFix[1]);
});
$numberButtons[2].addEventListener("click", () => {
//    console.log(numArrayFix[2]);
    pushNumber(numArrayFix[2]);
});
$numberButtons[3].addEventListener("click", () => {
//    console.log(numArrayFix[3]);
    pushNumber(numArrayFix[3]);
});
$numberButtons[4].addEventListener("click", () => {
//    console.log(numArrayFix[4]);
    pushNumber(numArrayFix[4]);
});
$numberButtons[5].addEventListener("click", () => {
//    console.log(numArrayFix[5]);
    pushNumber(numArrayFix[5]);
});
$numberButtons[6].addEventListener("click", () => {
//    console.log(numArrayFix[6]);
    pushNumber(numArrayFix[6]);
});
$numberButtons[7].addEventListener("click", () => {
//    console.log(numArrayFix[7]);
    pushNumber(numArrayFix[7]);
});
$numberButtons[8].addEventListener("click", () => {
//    console.log(numArrayFix[8]);
    pushNumber(numArrayFix[8]);
});
$numberButtons[9].addEventListener("click", () => {
//    console.log(numArrayFix[9]);
    pushNumber(numArrayFix[9]);
});

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
////// OPERATOR EVENT LISTENERS  //////
///////////////////////////////////////

$operatorButtons[0].addEventListener("click", () => {
//    console.log(operArray[0]);
    pushOperator(operArray[0]);
});
$operatorButtons[1].addEventListener("click", () => {
//    console.log(operArray[1]);
    pushOperator(operArray[1]);
});
$operatorButtons[2].addEventListener("click", () => {
//    console.log(operArray[2]);
    pushOperator(operArray[2]);
});
$operatorButtons[3].addEventListener("click", () => {
//    console.log(operArray[3]);
    pushOperator(operArray[3]);
});

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
function unpackArray(arr){
    for (i=0; i < arr.length; i++){
        if (currentOperator === '') {
            if (typeof arr[i] === 'number' || arr[i] === '.') {
                //Increment i without doing anything
            } else {
                currentOperator = arr[i];
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

function pushOperator(str){
//    alert(str);
    if (str === "C") {
        calculation = [];
        firstNumber = 0;
        secondNumber = 0;
        currentOperator = '';
        $screen.value = '0';
    } else {
        if (currentOperator != ''){   
            calculate();
        } else {
            calculation.push(str);
            $screen.value = screenDisplay;
            //currentOperator = str;
        }
    }
};

function calculate(){
    //  alert(" = ");
    //  console.log("=");
    //console.log(calculation);
    unpackArray(calculation); 
    //console.log(firstNumber, secondNumber, currentOperator);
    switch (currentOperator) {
        case '+':
            screenDisplay = add(firstNumber, secondNumber);
            break;
        case '*':
            $screen.value = multiply(firstNumber, secondNumber);
            break;
        case `-`:
            $screen.value = subtract(firstNumber, secondNumber);
            break;
        case '/':
            $screen.value = divide(firstNumber, secondNumber);
            break;
        default:
            console.log("Something's busted");
    }        
};

///////////////////////////////////////
////// MATHEMATICAL FUNCTIONS /////////
///////////////////////////////////////
function add(num1, num2){
    let result = num1 + num2;
    firstNumber = result;
    secondNumber = 0;
    currentOperator = '';
    calculation = [];
    calculation = [...firstNumber + ''].map(Number);
    $screen.value = calculation.join('');
    return result;
}

function multiply(num1, num2){
    let result = num1 * num2;
    firstNumber = result;
    secondNumber = 0;
    currentOperator = '';
    calculation = [];
    calculation = [...firstNumber + ''].map(Number);
    $screen.value = calculation.join('');
    return result;
}

function subtract(num1, num2){
    let result = num1 - num2;
    firstNumber = result;
    secondNumber = 0;
    currentOperator = '';
    calculation = [];
    calculation = [...firstNumber + ''].map(Number);
    $screen.value = calculation.join('');
    return result;
}

function divide(num1, num2){
    let result = num1 / num2;
    firstNumber = result;
    secondNumber = 0;
    currentOperator = '';
    calculation = [...firstNumber + ''].map(Number);
    $screen.value = calculation.join('');
    return result;
}