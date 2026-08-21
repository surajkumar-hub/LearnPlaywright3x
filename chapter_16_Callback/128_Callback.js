function placeOrder(item, callback) {
    console.log("Order Placed....");
    callback(); // This is function calling
}

// This is definition part => Here we have defined the function
placeOrder("Burger", function () {
    console.log("Order is ready!, pick it up!");
})

// Previously what we used to do is - First we used to create a normal 
// function, then we call it

// This is the first Way
function print() {
    console.log("Normal Fn - Done with the order");
}
placeOrder("Burger", print);

// Second way  - By using anonymous function
placeOrder("Burger", function () {
    console.log("Order is ready!, pick it up!");
})

// Third Way - By using Arrow Function
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});

// Out of these 3 ways playwright uses the third way i.e. by using arrow function

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });