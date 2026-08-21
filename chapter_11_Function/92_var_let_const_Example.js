var a = 10;
console.log(a); // 10
// Var - It is Function Scoped. A traitor

// Define a function

function printHello() {
    console.log("Hello TheTestingAcademy");
    var a = 20;
    console.log(a); // 20
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log(a); //30

}

printHello();

/** 
How var is function scoped() or called as a traitor - when we changed the 
value of a inside the if statement i.e. var a = 30; this value actually not
scoped inside that if statement, instead, the var variable is scoped to the 
function level i.e. function printHello(){}. That's why it is function scoped. 
It basically saying even though you have assigned the value a = 20, you have 
overridden the value to a = 30, so I"ll use a = 30 not 20. This is why people 
don't use var because it's function scoped. In this case, if someone reasign 
the value, that value become real value.
 **/


// let - It is Block Scoped

let b = 20; // Global Scope
console.log(b); //  20

function printHello() {
    console.log("Hello TheTestingAcademy!");
    let b = 30; // Local Scope
    console.log(b); // 30
    if (true) {
        let b = 5;
        console.log(b); // 5
    }
    console.log("let ->", b);   // 30
}

// Calling of the function
printHello();
console.log(b); // 20

/**
 As let is block scoped, the value of b won't available outside the if block.
The moment block is closed the value b = 5 won't be accessible outside of it.
 */

// Let does not allow us to have a re-declaration. 
// let a = 10;
// let a = 10; // Not allowed - Will get syntax error


// var allow us to have a re-declaration 
var a = 11;
var a = 100;

// var nn = "Pramod";
// let nn = "Pramod"; // Not Allowed - Will get syntax error
// let won't allow this if that variable has already been declared

// If we reverse it also, it won't allowed
// let nn = "Pramod";
// var nn = "Pramod"; // Not Allowed - Will get syntax error

const pi = 3.14;
console.log(pi);
pi = 3.14159; // Will get TypeError: Assignment to constant variable.

{
    // This is a block
}

const a = [1, 2, 3];
a.push(10); // It is possible because we are adding into an array not into 
// the a. Here "a" is just a reference of an array and when we are saying 
// const a = [1, 2, 3]; we are making reference as constant not array. 
// Reference of "a" is not getting changed, only the array value is getting changed.

function adasd() {
    // This is a function block
}