// Single line comment

/*
    Multiline comment
    Detail complex logic
    Write algorithm
    Enlist License information
    Copyright information
*/
//let welcome = 'Welcome';
//let welcome = 'Hello';

//let price = 49.99;
//let price = '20.99';
//let price = 20.99;
//let price = 12;
//let message = "Hello World";
//let message1 = "Hello \"World\"";
let name = 'Mahua';
let message = `Hello World ${name}`;
message = message.toLowerCase();
//message = message.toUpperCase();
//price = 20.99+1;
//price = price-1;
//price = price + 1
price = 20;

let amount = 123;

let amount1 = "123.12";

let amount2 = "123";

//let name = 'Hiking Boots';

//let discounted = false;

/* let price = 49.99,
    name = 'Hiking Boots',
    discounted = false; */

//price = 99.99;

//const price = 40; //Constant
//price = 59.99; //Cannot change value of constant

//let 99times = 99; //Invalid variable name

//let let = 99; //Invalid variable name since let is a keyword

//let price1; //Not initialized

//Objects
let person = {
    firstName: "Michelle", 
    lastName:"Obama"
};



//showMessage(welcome);
//showMessage(typeof price); //typeof operator tells us the datatype of the variable. In this case, number
//showMessage(price);
//showMessage(++price); //Shows 13 when price = 12
//showMessage(price++); //Shows 12 when price = 12
//console.log(price++); //Shows 13 when price=12
//console.log(price++); //Shows 13 when price=12 and the previous line is uncommented
//showMessage(name);
//showMessage(discounted);
//showMessage(99times); //Throws error
//showMessage(discounted);
//showMessage(let); //Throws error
//showMessage(price1);
//console.log(price1) //Shows undefined
//console.log("A message");
//showMessage(message);
//showMessage(message1);
//showMessage(amount);
//showMessage(Number.parseFloat(amount1));
//showMessage(Number.parseInt(amount2));
//showMessage(person.firstName+" "+person.lastName);
//showMessage(typeof Number.parseInt(amount2));
//console.log(typeof person);
/* 
if(5 === 5) //Comparison    //true
{
    console.log('Yes');
}

if(5 > 5) //Comparison      //false
{
    console.log('No');
}

let state = 'FL';
let taxPercent = 7;

if(state === 'FL'){ //Equality
    taxPercent = 7;
}

if(state !== 'FL'){ //Inequality
    taxPercent = 0;
}

console.log(taxPercent);

if(true){
    showMessage('true');
}

if(price > 15){
    showMessage('discounted');
} 

if(price < 15){
    showMessage('not discounted');
}*/


/* console.log(typeof ((1.1+1.3).toFixed(2)));
console.log((1.1+1.3).toFixed(2));
console.log(+(1.1+1.3).toFixed(2));
console.log(+((1.1+1.3).toFixed(2)) === 2.4);

if( +((1.1+1.3).toFixed(2)) === 2.4){
    showMessage('true');
}
*/

/* if(1 == "1"){ //This is true
    showMessage('true');
}
else{
    showMessage('false');
}  */

if(1 === "1"){ //This is false (=== OR 'strictly equal to' works on the same types on both sides of the operator)
    showMessage('true');
}
else{
    showMessage('false');
} 

//Ternary operator
let price20 = 20;
let message20 = price20 > 10? 'yes':'no';
showMessage(message20);


//Functions

//Function declaration
function logMessage(){
    console.log('Message from function declaration');
}

logMessage(); //Called using the function name


//Function Expression
let fn = function(){ //Name of the function in a function expression is optional
    console.log('Message from function expression');
}

fn(); //Called using the function variable

let fn1 = function functionName(){ //Name of the function in a function expression is optional
    console.log('Message from function expression');
}

fn1();

/*
console.log(myVar);
console.log(myFunc);
 
var myVar = "Hello!";
function myFunc() {
  return "World!";
}

*/

//DAY3 - Afternoon
/* if (true) {
    let blockScopedVariable = "I'm inside this if block";
}
 
console.log(blockScopedVariable); // Error! Not accessible here */



/* let numbers = [1, 2, 3];
let iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


console.log(myVar); // undefined (declaration hoisted, but not initialization)

sayHello(); // Works! (function declaration hoisted)
 
var myVar = "Hello";

function sayHello() {

    console.log("Hello!");

}
*/


//Hoisting

//This block of code runs fine
carName = "BMW";
console.log(carName);
var carName;

//This block of code gives 'undefined'
console.log(carNamex);
var carNamex = "XXXXXXXX";

//This block of code runs fine even without a declaration
carName1 = "Tesla";
console.log(carName1);


//This block of code will not run (Uncaught ReferenceError: Cannot access 'carName1' before initialization)
/* carName2 = "Toyota";
console.log(carName2);
let carName2; */

//This block of code does not compile (Const declarations must be initialized)
/*carName3 = "Merc";
console.log(carName3);
const carName3; //Syntax error
*/

//Block
myVar33 = "Hello, world*******";
console.log(myVar33); // undefined
var myVar33;



//This block of code gives 'undefined'
/* console.log(myVariable); 
var myVariable = "Hello World!!!!"; */


//This block of code gives an error (Uncaught ReferenceError: myVariable1 is not defined)
/* if(true){
    let myVariable1 = "Hello";
}
console.log(myVariable1); */

//Another block
console.log(x);
var x=5;

//Another clock
var x;
console.log(x);
x = 5;

export function sum(num1, num2){
    return num1+num2;
}





