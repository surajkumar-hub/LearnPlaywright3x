let str = "  Hello, World!  ";
console.log(str.toUpperCase()); // HELLO, WORLD!
console.log(str.toLowerCase()); // hello, world!

// Trim whitespace
console.log(str.trim()); // Hello, World!

str.trimStart();
str.trimEnd();

// Replace
let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL", "PASS"); // // "Test: PASS. Retry: FAIL."  (first only)
msg.replaceAll("FAIL", "PASS");
msg.replace(/FAIL/g, "PASS"); // replace all with Regex


// Concatenation

"Hello" + " " + "World"; // Concatination with + operator
"Hello".concat(" ", "World"); //Concatination by concat()
`${"Hello"} ${"World"}`; // Concatination by template literal