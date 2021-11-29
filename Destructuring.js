console.log("Destructuring in JavaScript");

let a, b;
[a, b] = [23, 53];
console.log(a, b);

[a, b] = [b, a]; // Swapping two numbers
console.log(a, b);

let c, d;
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(a, b, c, d);

({ a, b, c, ...d } = { a: 54, b: 13, c: 93, d: 49, e: 12 });
console.log(a, b, c, d);


// Array Destructuring
const arr = ["This", "is", "Neeraj", "Kumar"];
[a, b, c, d] = arr;
console.log(a, b, c, d);

// Object Destructuring
const obj = {
    name: "Neeraj",
    age: 21,
    hobby: "Coding"
};

const { name, age, hobby } = obj;
console.log(name, age, hobby);