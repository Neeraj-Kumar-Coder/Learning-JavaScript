console.log("Maps in JavaScript");

const myMap = new Map();
const key1 = "", key2 = {}, key3 = () => { };

myMap.set(key1, "This is an empty string");
myMap.set(key2, "This is an empty object");
myMap.set(key3, "This is an empty function");

console.log(myMap);

const value1 = myMap.get(key1);
const value2 = myMap.get(key2);
const value3 = myMap.get(key3);

console.log(value1, value2, value3);

// Iterating the map

for (let [key, value] of myMap) {
    console.log(key, value);
}

for (let keys of myMap.keys()) {
    console.log(keys);
}

for (let values of myMap.values()) {
    console.log(values);
}

myMap.forEach((value, key) => {
    console.log(key, value);
});

// Conversion

const mapToArray = Array.from(myMap);
console.log(mapToArray);

const mapKeysToArray = Array.from(myMap.keys());
console.log(mapKeysToArray);

const mapValuesToArray = Array.from(myMap.values());
console.log(mapValuesToArray);