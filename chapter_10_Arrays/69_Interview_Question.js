let nums = [10, 25, 30, 45];
let result = nums.find(x => x > 20);
console.log(result); // 25
/** 
nums.find(x => x > 20); It says I"ll find x (any element), then arrow 
function (=>), until this x is greater than 20.
Here:
- x represents each element of the array, one at a time.
- x => x > 20 is an arrow function.
- The function checks whether the current element is greater than 20.
- find() goes through the array until the condition becomes true.
- It returns the first element that satisfies the condition.
- If no element satisfies the condition, find() returns undefined.

Here, x can be any valid variable name, such as x, num, value, temp, etc.
It is a temporary parameter representing the current array element.
**/

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index); // 1 

// nums.findIndex(n => n > 20); It says find the index of the element, who is 
// greater than 20 

// find the last element who"ll fulfill this condition - n => n > 20
nums.findLast(n => n > 20); //  45
nums.findLastIndex(n => n > 20); // 3