// Learning method (Primitive Data-Types): NN BB SS U

let a = null;
let b = 123;

let c = true;
let d = BigInt("102983480");

let e = "bittu";
let f = Symbol("Nice symbol");

let g = undefined;

console.log("variable 'a' is: ", typeof a, ".value: ", a);
console.log("variable 'b' is: ", typeof b, ".value: ", b);
console.log("variable 'c' is: ", typeof c, ".value: ", c);
console.log("variable 'd' is: ", typeof d, ".value: ", d);
console.log("variable 'e' is: ", typeof e, ".value: ", e);
console.log("variable 'f' is: ", typeof f, ".value: ", f);
console.log("variable 'g' is: ", typeof g, ".value: ", f);

// An Object is a non-primitive data-type
let obj = {
    name: "bittu",
    age: 22,
    dob: "19/09/2000"
};

console.log(obj["name"]);
obj["newfield1"] = 999;
obj.newfield2 = "haha";
console.log(obj)

let str = "12";
let num = 88;
console.log(str + num)

// Loops in JavaScript
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(obj);
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}

console.log('\n');
let arr = ["neeraj", "is", "a", "good", "boy"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (key in arr) {
    console.log(key, ":", arr[key]);
}

for (value of arr) {
    console.log(value);
}

const plusOne = x => 1 + x;
console.log(plusOne(2));


// Strings
let string = "Bittu is a good boy";
console.log(string);

for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}

for (key in string) {
    console.log(key)
}

for (value of string) {
    console.log(value)
}

console.log("\n");
console.log("hello\rt");

console.log(string.length)
console.log(string.slice(2))
console.log(string.replace("good", "honest"))

let ajeeb = "          haha      ";
console.log(ajeeb.trim(), "close");

const myArr = ["hello", 12, [22.33, 33], 22.33];
console.log(myArr);
myArr.forEach((ele, idx) => {
    console.log(idx, ele);
});

console.log(myArr[4])
myArr[4] = 9929;
console.log(myArr)
myArr[12] = "haha";
myArr.forEach((ele, idx) => {
    console.log(idx, ele);
});
console.log(typeof (myArr));

console.log(myArr.toString());
console.log(myArr.join('-'));

const happyArray = [23, 2, 56, 48, 78, 96, 63, 1, 55, 612, 112];
happyArray.sort((a, b) => a - b);
console.log(happyArray);

console.log("\n\n\n");


let testarr = ["Bittu", "is", "a", "good", "boy"];
let tmp = testarr.map((value, index, array) => {
    return value + value;
});
console.log(tmp);

let tfr = testarr.filter((value, index, array) => {
    return value == "Bittu" || value == "is" || value == "good";
});
console.log(tfr);

let trc = testarr.reduce((value1, value2, index, array) => {
    return value1 + " " + value2;
});

console.log(trc);

// console methods
console.time("started printing");
console.warn("This is a warning to you!");
console.error("This is a fatal error!");
console.assert(3 < 12);
console.table(obj);
console.timeEnd("started printing");