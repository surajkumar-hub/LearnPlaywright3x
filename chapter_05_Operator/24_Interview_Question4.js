let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`); // Template Literal

// Template literals are enclosed in backticks (``) and use ${} to insert 
// variables or JavaScript expressions into a string.
const name = "Suraj";
const age = 26;
console.log(`My name is ${name} and I am ${age} years old.`);
// O/P: My name is Suraj and I am 26 years old.

console.log(`What is the SLA time ? - ${sla}`);