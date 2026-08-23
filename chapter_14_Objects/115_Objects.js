// let a = { status: "pass" };
// console.log(a.status); // pass
// console.log(a["status"]); // pass

// Using single quote is also possible
// let a1 = { status: 'pass' };
// console.log(a1.status);

// keys are case sensitive.
// let a22 = { status: "pass", Status: "fail" };
// console.log(a22["status"]);
// console.log(a22["Status"]);

let a = { status: "pass" };
let b = a;  // b Copies the reference, not the object
b.status = "fail";
console.log(a.status);


let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d); // false

// Can we create a object like this? No --- It's a JSON
const t_json = {
    "name": "pramod",
    "age": 10
};
console.log(t_json);

// This is how we can create an object
const t_js = {
    name: "pramod",
    age: 10
};
console.log(t_js);