console.log("Different othre types of for loops in JavaScript");

const obj = {
    name: "Neeraj Kumar",
    age: 21,
    email: "nk7075034@gmail.com",
    language: "JavaScript"
};

// Iterating using traditional for loop
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(Object.keys(obj)[index], ': ', element);
}
console.log("******************");

// Iterating using for-in loop
for (let key in obj) {
    console.log(key, ': ', obj[key]);
}
console.log("******************");


// ITERATING A STRING
const str = "This is a sample string and we want to test different for loops in it";
for (const index in str) {
    console.log(index);
}

for (const character of str) {
    console.log(character);
}

// ITERATING AN ARRAY
const array = ["Neeraj", "Rinki", "Navya", "Reyansh"];
for (const index in array) {
    console.log(index);
}
for (const value of array) {
    console.log(value);
}