let a = "Pramod";

if (true) {
    console.log(a);
    let a = "temp";
}

// var a = "Pramod";
// if (true) {
//     console.log(a); // Pramod
//     var a = "temp";
// }

// Incase of var, it allows to take the value from the global variable but
// let, won't allow this and we"ll get this error - ReferenceError: Cannot
// access 'a' before initialization

// Temporal Dead Zone

/**  
let a = "Pramod"; // Global Scope
Entering into a Block - Now it is Block Scoped
console.log(a); // a = TDZ (The moment we created "a", JS compiler temporarily
store the "a" in the TDZ because JS compiler thinks that there will be a value 
which will come later)

// TDZ means - it exists but not initialized

The moment we used console.log(a); will get ReferenceError because a is not
yet defined and let will try to search only within the if block because let is
block scoped.

**/