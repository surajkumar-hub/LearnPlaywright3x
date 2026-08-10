// Shallow Copy
// Original array will not change if you change the copy. 

let original = [1, 2, 3];
let copy1 = [...original]; // by using spread operator
console.log(original);
console.log(copy1);

let copy2 = original.slice();
console.log(copy2);

let copy3 = Array.from(original);
console.log(copy3);

let copy4 = original.concat();
console.log(copy4);

console.log(" ---- ");

copy1.push(99);
console.log(original);
console.log(copy1);

// Deep Copy
let deep_copy_array = original; // It's a Deep copy

original.push(91);
console.log(original);
console.log(deep_copy_array);

deep_copy_array.push(91);
console.log(original);
console.log(deep_copy_array);

