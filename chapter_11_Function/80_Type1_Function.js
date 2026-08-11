// Type 1 - No param, No Return -> final return will be undefined.
// Define
function greet() {
    console.log("Hi");
}
// No Param and no Return (void)

// Calling 
greet();
greet();
greet();

let output = greet();
console.log(output); // undefined

// Real time usage of this function
function openBrowser() {
    console.log("Open Browser");
    // open the brower

}