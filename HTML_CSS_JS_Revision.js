console.log("Linked the JavaScript file.");

let htmlBody = document.querySelector("body");
let dynamicHeading = document.createElement("h1");
dynamicHeading.innerText = "This is created by JavaScript";
dynamicHeading.classList.add("text-white");
htmlBody.appendChild(dynamicHeading);

dynamicHeading.insertAdjacentHTML("beforebegin", `<h2 class="text-white">This is inserted beforebegin</h2>`);
dynamicHeading.insertAdjacentHTML("afterbegin", `<h2 class="text-white">This is inserted afterbegin</h2>`);
dynamicHeading.insertAdjacentHTML("beforeend", `<h2 class="text-white">This is inserted beforeend</h2>`);
dynamicHeading.insertAdjacentHTML("afterend", `<h2 class="text-white">This is inserted afterend</h2>`);

let navbar = document.querySelector("nav");
let newElement = document.createElement("p");
newElement.innerText = navbar.dataset.myattr;
newElement.classList.add("text-white");
htmlBody.appendChild(newElement);

let btn = document.querySelector("#btn");
let nameAlpha = Array.from(document.getElementsByClassName("name-alpha"));
let clickHandler = () => {
    nameAlpha.forEach((element, index) => {
        setTimeout(() => {
            element.classList.toggle("show");
        }, 50 * index);
    });
}

btn.addEventListener("click", clickHandler);

let glowBtn = document.querySelector("#glow-btn");
let intervalId = -1;
let html = document.querySelector("html");
glowBtn.addEventListener("click", () => {
    if (intervalId !== -1) {
        clearInterval(intervalId);
        intervalId = -1;
        html.classList.remove("bgyellow");
    }
    else {
        intervalId = setInterval(() => {
            html.classList.toggle("bgyellow");
        }, 300);
    }
});