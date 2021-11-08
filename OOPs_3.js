console.log("ES classes");

class Employee {
    constructor(EmpName, EmpSalary, EmpExperience) {
        this.name = EmpName;
        this.salary = EmpSalary;
        this.experience = EmpExperience;
    }
    tagline() {
        return `I am ${this.name} and I am the Best`;
    }

    static add(num1, num2) {
        return num1 + num2;
    }
}

let Neeraj = new Employee("Neeraj", 500000, 4);
console.log(Neeraj);

console.log(Employee.add(25, 35));

// Inheritance in classes

class Programmer extends Employee {
    constructor(name, salary, experience, language) {
        // super is used to call the constructor of the class from which this class is inherited
        super(name, salary, experience);
        this.language = language;
    }

    showLanguage() {
        return this.language;
    }

    static factorial(number) {
        if (!number) {
            return 1;
        }
        else {
            return number * this.factorial(number - 1);
        }
    }
}

let neeraj = new Programmer("Neeraj", 500000, 4, "C C++ JavaScript Python HTML CSS");
console.log(neeraj);

console.log(neeraj.showLanguage());
console.log(Programmer.factorial(5));