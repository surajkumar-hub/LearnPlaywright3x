class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}
class APITest extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}

let test = new APITest();
test.setup(); // It will be called whose object reference is used.
// In this case setup() of class APITest will be called.