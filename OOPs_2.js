console.log("Inheritance in Object Oriented Programming in JavaScript");

function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

Employee.prototype.tagLine = function () {
    return `I am the best @${this.name}`;
}

let neeraj = new Employee("Neeraj", 2500000, 4);
console.log(neeraj);

// Programmer

function Programmer(name, salary, experience, lanuguage) {
    Employee.call(this, name, salary, experience);
    this.lanuguage = lanuguage;
}

// Inheriting the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually setting the constructor
Programmer.prototype.constructor = Programmer;

let Neeraj = new Programmer("Neeraj", 2500000, 4, "C, C++, Python, HTML, CSS, JavaScript");
console.log(Neeraj);
console.log(Neeraj.tagLine());