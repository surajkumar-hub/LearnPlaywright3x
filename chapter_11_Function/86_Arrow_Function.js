// Normal Function
function greet(name) {
    return `Hello, ${name}!`;
}

// Function As Expression
const greet1 = function (name1) {
    return `Hello, ${name1}!`;
}

// Arrow Function:
const greet2 = (name2) => `Hello, ${name2}!`;

// If you want to make a normal function to arrow function - Remove the 
// keyword "function", remove the keyword "return", remove the curly braces 
// and use the =>


console.log(greet("Pramod"));
console.log(greet1("Pramod"));
console.log(greet2("Pramod"));