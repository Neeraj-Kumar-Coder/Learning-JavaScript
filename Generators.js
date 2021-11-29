console.log("Generators in JavaScript");

function* legendGenerator() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const genVal = legendGenerator();
console.log(genVal.next());
console.log(genVal.next());
console.log(genVal.next());
console.log(genVal.next());
console.log(genVal.next());
console.log(genVal.next());