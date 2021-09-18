/*
Naming conventions:
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/
console.log('Checking file inclusion');

var mname = 'Neeraj';
console.log(mname);

var mname1 = `Na'me"is"nee'raj`; // This will take both ' and " as string
console.log(mname1);
var age = 20;
console.log(mname, mname1, age);

const thisIsConstant = 'hahahaChangeMatKrDiyo'; // Must to initialize (we cannot declare only)
console.log(thisIsConstant);

{
    let mname = 'Rohan';
    console.log(mname);
}
console.log(mname);

const arr = [1, 2, 3, 4, 5];
arr.push(6); // No error
// arr = [2,5,6]; // Error
console.log(arr);