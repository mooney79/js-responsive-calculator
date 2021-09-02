/*
///////////////////////////////////////////
///////// ASSIGNMENT GOALS
//////////////////////////////////////////

You are not allowed to use the JavaScript function eval

For the following, use the code from Eloquent JavaScript to handle click events:

Using Array.prototype.push, perform actions on the calculation variable when numbers 
and operators are pressed

Using a for loop, alert() the calculation when = is pressed

Make the numbers and calculations appear on the calculator display

Read 
[Values](http://eloquentjavascript.net/01_values.html#h_sVZPaxUSy/), 
[Numbers](http://eloquentjavascript.net/01_values.html#h_flOCH3CuFg), 
[Arithmetic](http://eloquentjavascript.net/01_values.html#h_RfBT3HMnYs), 
[Variables](http://eloquentjavascript.net/02_program_structure.html#h_rAGNsfewCX), 
[Defining A Function](http://eloquentjavascript.net/03_functions.html#h_tqLFw/oazr), 
[Event Handlers](http://eloquentjavascript.net/14_event.html#h_HQoLxG2r2l) 
[Events and DOM Nodes](http://eloquentjavascript.net/14_event.html#h_Kx1VwAV7ei)

<p>Click this document to activate the handler.</p>
<script>
  window.addEventListener("click", () => {
    console.log("You knocked?");
  });
</script>

<button>Click me</button>
<p>No handler here.</p>
<script>
  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    console.log("Button clicked.");
  });
</script>


Okay.  Let's consider some stuff.
What do we need it to do?
click on a button => store value of button clicked in memory. 1, 4, *, etc
Create a string (or array!) of said buttons until = is clicked
Break them up into individual numbers again
Index by index, check to see if value is an operator.
  If yes, then add to previous number.
     (prev number * 10 + new number?  That should get us to 423, for example)
  If no, store the existing number in memory somewhere and then note the operator.
continue this until the end of the array is reached
THEN perform math on the two numbers
Display the answer to the ... display.

*/

const $numberButtons = document.querySelectorAll(".number");
const numArray = Array.from($numberButtons.keys());
let numArrayFix = [];
const $operatorButtons = document.querySelectorAll(".operator");
const operArray = Array.from($operatorButtons.keys());
const $clearButton = document.querySelector(".clear");
const $equalButton = document.querySelector(".equal-sign");


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

$numberButtons[0].addEventListener("click", () => {
    console.log(numArrayFix[0]);
    pushNumber(numArrayFix[0]);
});
$numberButtons[1].addEventListener("click", () => {
    console.log(numArrayFix[1]);
    pushNumber(numArrayFix[1]);
});
$numberButtons[2].addEventListener("click", () => {
    console.log(numArrayFix[2]);
    pushNumber(numArrayFix[2]);
});
$numberButtons[3].addEventListener("click", () => {
    console.log(numArrayFix[3]);
    pushNumber(numArrayFix[3]);
});
$numberButtons[4].addEventListener("click", () => {
    console.log(numArrayFix[4]);
    pushNumber(numArrayFix[4]);
});
$numberButtons[5].addEventListener("click", () => {
    console.log(numArrayFix[5]);
    pushNumber(numArrayFix[5]);
});
$numberButtons[6].addEventListener("click", () => {
    console.log(numArrayFix[6]);
    pushNumber(numArrayFix[6]);
});
$numberButtons[7].addEventListener("click", () => {
    console.log(numArrayFix[7]);
    pushNumber(numArrayFix[7]);
});
$numberButtons[8].addEventListener("click", () => {
    console.log(numArrayFix[8]);
    pushNumber(numArrayFix[8]);
});
$numberButtons[9].addEventListener("click", () => {
    console.log(numArrayFix[9]);
    pushNumber(numArrayFix[9]);
});


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


$operatorButtons[0].addEventListener("click", () => {
    console.log(operArray[0]);
    pushOperator(operArray[0]);
});
$operatorButtons[1].addEventListener("click", () => {
    console.log(operArray[1]);
    pushOperator(operArray[1]);
});
$operatorButtons[2].addEventListener("click", () => {
    console.log(operArray[2]);
    pushOperator(operArray[2]);
});
$operatorButtons[3].addEventListener("click", () => {
    console.log(operArray[3]);
    pushOperator(operArray[3]);
});
$clearButton.addEventListener("click", () => {
    console.log("Clear!")
    pushOperator("C");
})

$equalButton.addEventListener("click", () => {
    console.log("=")
    calculate();
})

//Define a variable calculation pointing to an empty array
var calculation = [];

function pushNumber(num){
    alert(num);
};

function pushOperator(num){
    alert(num);
};

function calculate(){
    alert(" = ");
};


