let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`;

// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks) — allows expressions & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);

// Multiline Template Literal String
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;

console.log(String(200)); // We can convert a number into string like this
String(true); //  "true"
String(null); // "null"
String([1, 2]); // "[1,2]"