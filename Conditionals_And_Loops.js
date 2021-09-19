console.log('Learning If-Else and Loops in JavaScript');
const age = '19';
if (age >= 18) // Compairs only the value not the data type
{
    console.log('You can Vote!');
}
else {
    console.log('You cannot Vote!');
}

if (age === 19) {
    console.log('Data type and value, both are same!');
}
else {
    console.log('One of the type and value or both are not same');
}

// To check the existence of a variable
if (typeof vari !== 'undefined') {
    console.log('Vari is present and is defined');
}
else {
    console.log('Vari is NOT defined');
}

// Switch case statements and these have same syntax as C and C++ language

// Loops Start From Here
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0);

// Iterarting Arrays
let arr = [2, 5, 4, 6, 9, 8, 7, 8];

arr.forEach(function (element) {
    console.log(element);
});