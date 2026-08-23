// Extracting Substrings

let str = "Login_Test_Pass_001";

// slice(start, end) — negative indexes supported (Actually = start, end-1)
console.log(str.slice(0, 5)); // (Actually it is asking for 0,4) -> "Login"
console.log(str.slice(11)); // Pass_001
console.log(str.slice(-3)); // 001

// get the test number
let testNumber = str.slice(-3); // 001

// substring(start, end) — no negatives (treats as 0)
str.substring(6, 10);  // "Test"

// at() for single chars
str.at(0);   // "L"
str.at(-1);  // "1"