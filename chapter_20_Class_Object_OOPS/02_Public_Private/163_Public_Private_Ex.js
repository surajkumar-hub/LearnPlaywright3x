// Private Fields (#) — Hidden Data
// Public Fields 

let v = 10; // But outside of the class it is allowed to use let, var, const
class Credentials {
    #apiKey; // Instance / Class variable 
    user; //  In case of class variable, JS doesn't allow to use let, var, const

    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key;
    }
    // Custom made fuction by us
    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}
let cred = new Credentials("admin", "scret_key_1234");
// console.log(cred.apiKey); // undefined
// console.log(cred.#apiKey); // Not allowed - SyntaxError
console.log(cred.user); // admin