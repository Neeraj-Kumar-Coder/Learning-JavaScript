console.log('This is the practice of Arrays and Objects');

const myArr = ['Neeraj', 20, true, [1, 2, 3, 4, 5]];
console.log(myArr);
myArr.reverse();
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.push([1, 2, 3, 5, 6, 9, 7]);
console.log(myArr);
myArr.unshift('Test');
console.log(myArr);
console.log(myArr.lastIndexOf(3));

let arr = [5, 10, 15];
console.log(arr);
arr = arr.concat(myArr);
console.log(arr);