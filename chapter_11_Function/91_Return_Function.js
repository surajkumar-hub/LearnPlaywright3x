function getStatus(code) {
    // if (code >= 200 && code < 300) return "Success";
    // if (code >= 400 && code < 500) return "Client Error";
    // if (code >= 500) return "Server Error";

    // We can write the above code by using if-else condition

    if (code >= 200 && code < 300) {
        return "Success";
    } else if (code >= 400 && code < 500) {
        return "client error";
    } else if (code >= 500) {
        return "server error";
    } else {
        return "unknown";
    }
}

getStatus(200);
getStatus(404);
getStatus(500);


// Returns nothing → undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}

logTest("Hi this is a a log");

// Can we return an Array also - Yes
function aaa() {
    return [2, 2, 3, 5, 4];
    // return {"name : pramod"}; - We can return object also
}