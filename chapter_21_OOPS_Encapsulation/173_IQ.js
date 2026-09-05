class Environment {

    // Constructor with default value is allowed
    constructor(name = "staging", port = 3000) {
        this.name = name;
        this.port = port;
    }
    getURL() {
        return "http://" + this.name + ":" + this.port;
    }
}
// If we don't pass the value, it"ll use the default value
let env1 = new Environment();
let env2 = new Environment("production", 8080);
console.log(env1.getURL());
console.log(env2.getURL());