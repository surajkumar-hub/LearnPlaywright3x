class Person {
    // hide your children. Make them private
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1
        this.#child2 = ch2;
    }
    getChild1() {
        return this.#child1;
    }

    setChild1(changed_name) {
        this.#child1 = changed_name;
    }
}
let p = new Person("Pramod", "Vrad", "Jenny");
// console.log(p.#child1); Directly we can't access them
console.log(p.getChild1()); // We can only access them by using the function
p.setChild1("VIRAD");
console.log(p.getChild1());