let arr = [1, 2, 3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

// push multiple element
arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);

// Final Array - [ 1, 2, 3, 5, 6 ]

arr.splice(2, 1); // (2, 1) means start from the index 2, delete 1 element
console.log(arr); // [ 1, 2, 5, 6 ]

arr.splice(2, 0, 99); // (2, 0, 99) means in the index 2, delete 0 element and add 99
console.log(arr); // // [ 1, 2, 99, 5, 6 ]

arr.splice(1, 2, 10, 20); // it means go to index 1, delete 2 element and add 10 & 20
console.log(arr); // [ 1, 10, 20, 5, 6 ]

arr.splice(-1, 1, 1); // it means go to the last element i.e. 6, delete 1 element and add 1
console.log(arr); // [ 1, 10, 20, 5, 1 ]