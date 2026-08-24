let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function (result, index) {
    console.log("Test " + index + " -> " + result)
});
console.log("All done");
/**

O/P:
Test 0 -> PASS
Test 1 -> FAIL
Test 2 -> PASS
Test 3 -> SKIP

**/

/** "All done" prints last because forEach() is synchronous — it finishes
all 4 iterations first, then moves on to the next statement.

    Here, function (result, index) { ... } is the callback function passed to
forEach().

    forEach() is synchronous.It executes the callback once for each element,
        one after another, and completes all iterations before the next line of code
executes. **/
