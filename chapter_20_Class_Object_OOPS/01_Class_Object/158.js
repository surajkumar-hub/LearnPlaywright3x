class Car {

    // Default Conscutor
    constructor() {
        // It"ll just run when an object is created
    }

    // Parameterized Constructor
    constructor(assigned_name) {
        this.name = assigned_name;
    }
}

let hyundai_i10 = new Car("i10");
console.log(hyundai_i10.name);

let hyundai_creta = new Car("creta");
console.log(hyundai_creta.name);

// we can write constructor with const
const a = new Car("i10");     // constructor runs → "i10"
const b = new Car("Nexon");

// We can't write similar type of constructors multiple times

// class Bad { constructor(a) {} constructor(b) {} }

class Bike { }
new Bike();   // Bike {}  — works fine, just has nothing in it
