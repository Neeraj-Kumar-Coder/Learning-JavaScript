console.log("Sets in JavaScript");

const mySet = new Set();
// const mySet = new Set([1, 2, 5, true, false, () => { }, {}]); // We can also use the constructor

mySet.add(5);
mySet.add("this");
mySet.add("that");
mySet.add({ name: "Neeraj Kumar" });
mySet.add(() => { console.log("Hello I am a function"); });

console.log(mySet);

console.log("Does this set contain that as a string", mySet.has("that"));

mySet.delete("that");

console.log("Does this set contain that as a string", mySet.has("that"));

// Iterating
for (let item of mySet) {
    console.log(item);
}

mySet.forEach((item) => {
    console.log(`The item is ${item}`);
});

// Sets are very useful to remove duplicates from an array (an important question)

let arr = [1, 2, 3, 5, 1, 12, 4, 5, 7, 4, 5, 8, 9, 5, 3];
let parseSet = new Set(arr);
let parseArray = Array.from(parseSet);
console.log(parseArray);