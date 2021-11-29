console.log("Symbols in JavaScript");

// Symbols are used to produce unique keys
const k1 = Symbol();
const k2 = Symbol();

myObj = {};
myObj[k1] = "Neeraj";
myObj[k2] = "Rinki";

console.log(myObj);

// Iterating
// Symbols are ignored in for in loop and JSON.stringify()
for (let key in myObj) {
    console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj));