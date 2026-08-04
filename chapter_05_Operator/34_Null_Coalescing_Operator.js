let amul = null;
let val = amul ?? "NANDANI Milk";
console.log(val);


let api_response = null;
let responsedata = api_response ?? "{}";
console.log(responsedata);

// It means if the response is comes, then same value will be assigned, 
// otherwise, if the response doesn't come ot it's null, then the default value
//  ({}) will be assigned
// Here O/P will be {} because value of api_response = null


let api_response1 = "Pramod";
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);

// Here O/P will be Pramod because value of api_response = Pramod


