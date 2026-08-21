console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2 : API response received!")
}, 5000);

console.log("Test 3: Moving to next last");

/**

O/P:
Test 1: started
Test 3: Moving to next last
Test 2 : API response received!

 */