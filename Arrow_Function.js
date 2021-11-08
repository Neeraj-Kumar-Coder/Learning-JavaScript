console.log("Arrow Functions in JavaScript");

const greet_1 = () => {
    console.log("Good Morning");
};
greet_1();

const greet_2 = () => console.log("Good Morning");
greet_2();

const greet_3 = name => console.log(`Good Morning ${name}`);
greet_3("Neeraj");

const greet_4 = (name, age) => console.log(`${name} is ${age} years old`);
greet_4("Neeraj", 20);


// Complete Arrow Funtion

const greet_5 = (name, age) => {
    let msg = name + '_' + age;
    return msg + " is the available user name for your profile";
}

console.log(greet_5('Neeraj', 20));