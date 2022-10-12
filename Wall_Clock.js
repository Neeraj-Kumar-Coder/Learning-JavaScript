console.log("Connected the JavaScript File");

let hourHand = document.querySelector("#hour");
let minuteHand = document.querySelector("#minute");
let secondHand = document.querySelector("#second");
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
hourHand.style.transform = `rotate(${-90 + (hour * 60 * 60 + minute * 60 + second) / 120}deg)`;
minuteHand.style.transform = `rotate(${-90 + (minute * 60 + second) / 10}deg)`;
secondHand.style.transform = `rotate(${-90 + 6 * second}deg)`;

setInterval(() => {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    hourHand.style.transform = `rotate(${-90 + (hour * 60 * 60 + minute * 60 + second) / 120}deg)`;
    minuteHand.style.transform = `rotate(${-90 + (minute * 60 + second) / 10}deg)`;
    secondHand.style.transform = `rotate(${-90 + 6 * second}deg)`;
}, 1000);