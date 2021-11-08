console.log("Learning iterators in JavaScript");

// Iterator using iterator protocol
function legendIterator(iterable) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < iterable.length) {
                return {
                    value: iterable[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

const myArray = [64, 46, 46, 45, 4, 87, 9, 79, 94, 60, 64, 614, 4, 6];
const arrItr = legendIterator(myArray);
console.log(myArray);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);
console.log(arrItr.next().value);