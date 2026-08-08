// for loop vs while loop
// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// In the for loop we can do initialization at the outside but not advisable
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}

// while loop
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}