console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log("...");
console.log(10);

// Suppose I have print 1 to 10, this is not a right way to print.
// This is a repetitive task. For this we should use for loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// If we use pre-increment also there will no difference

for (let i = 0; i <= 10; ++i) {
    console.log(i);
}