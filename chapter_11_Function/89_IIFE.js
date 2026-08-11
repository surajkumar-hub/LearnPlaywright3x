//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

// Normal Function
function name1() {
    console.log("Hi")
}
name1();


// IIFE
(function () {
    console.log("Anonymous Function"); // Anonymous Function means function without name
})();

(function () {
    console.log("Staging")
})();

//If we are using Arrow Function, we don’t need to use function

(() => {
    console.log("Setup complete");
})();