// This is the preferred way to start or create an Array is by initialization

let browsers = ["Chrome", "Firefox", "Safari"];

// This is another way - By using Array constructor
let scores = new Array(3); // It will create empty array with 3 element
scores[0] = "1";
scores[1] = "2";
scores[2] = "3";

let scores2 = new Array(1, 2, 3); // This is also an alternate way. It"ll 
// create [1, 2, 3]


let numbers = new Array(100, 200, 300, 400);


let test = Array.of(10, 20, 30, 40, 50);
console.log(test.length);


// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]