console.log("Started Object Oriented Programming in JavaScript");

// using object literals

let car = {
    name: "Maruti",
    topSpeed: 80,
    run: function () {
        console.log("Maruti is running!");
    }
};

console.log(car);


// using constructors

function buildCar(givenName, givenTopSpeed) {
    this.name = givenName;
    this.topSpeed = givenTopSpeed;
    this.run = function () {
        console.log(`${this.name} is running with a top speed of ${this.topSpeed} kmph`);
    }
}

let car1 = new buildCar("Mercedes", 200);
console.log(car1);