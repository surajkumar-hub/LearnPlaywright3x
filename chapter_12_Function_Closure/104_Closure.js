// function outer() {
//     let name = "Pramod"

//     function inner() {
//         console.log(name);
//     }
//     return inner();
// }

// const greet = outer();
// greet();


function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
        let fail = true;
        if (fail) {
            console.log('Failed!');
        }
    }

    return installBrowser;
}

const runTc = startBrowser();
console.log(runTc());

//installBrowser(); // Not allowed - ReferenceError


