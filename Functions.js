console.log('Learning Functions in JavaScript');
function greet(name, thank = 'Thank You!') {
    console.log(`Happy Birthday ${name}. ${thank}`);
}

let myName = `Neeraj`;
greet(myName);

function returner() {
    return 'This will be returned';
}

let val = returner();
console.log(val);

// Function in a variable
let myGreet = function (name) {
    console.log(`Good Morning ${name}`);
}

myGreet('Bittu');