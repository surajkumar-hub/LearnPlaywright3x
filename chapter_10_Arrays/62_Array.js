let fruit = []; // This is called empty array
let browsers = ["chrome", "firefox", "webkit"];
console.log(browsers[0]); // chrome
console.log(browsers.at(-1)); // webkit
console.log(browsers.length); // 3
console.log(fruit.length); // 0

// For the Negative indexation, use "at"
console.log(browsers[-1]); // undefined
console.log(browsers.at(0)); // chrome