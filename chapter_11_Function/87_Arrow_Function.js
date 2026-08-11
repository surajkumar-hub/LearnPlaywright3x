function doubleMe(a) {
    return a * 2;
}
// Arrow Function
const doubleA = (a) => a * 2;
doubleA(10);

const getEnv = () => "staging";
console.log(getEnv());

//Mutiline Arrow Function
const getResult = (score) => {
    if (score > 70) return "Pass";
    return "Fail";
}

console.log(getResult(78)); // Pass
console.log(getResult(43)); // Fail