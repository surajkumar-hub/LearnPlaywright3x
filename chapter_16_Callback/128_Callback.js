function test(dadad, callMewhenDone) {
    console.log("Hi start the Testcase");
    callMewhenDone();
}

test("Verify the login page is working", async (page) => {

});

// Another Example
function garimaStory(item, callMeWhenStoreIsEmpty) {
    console.log("Store is busy!")
    //....
    console.log("Store is empty!")
    callMeWhenStoreIsEmpty();
}

/**  function garimaFnBuy() {
     console.log("Lets start shopping...")
 }

 garimaStory("Starting shopping", garimaFnBuy); **/

// Instead of this we can use an anonymous function

garimaStory("starting shoppping", () => {
    console.log("lets start shopping....")
});