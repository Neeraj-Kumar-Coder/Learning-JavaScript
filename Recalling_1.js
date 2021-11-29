console.log("Recalling the concepts of HTML, CSS and JavaScript while learning PHP");
document.body.onload = function () {
    let search = document.getElementById("search");
    search.focus();
}

let navButton = document.getElementById("nav-btn");
let closeNav = document.getElementById("close-nav");

navButton.addEventListener("click", () => {
    let navBar = document.querySelector(".nav-container");
    navBar.classList.toggle("show-nav");
});

closeNav.addEventListener("click", () => {
    let navBar = document.querySelector(".nav-container");
    navBar.classList.toggle("show-nav");
});

let searchBtn = document.getElementById("search-btn");
// // let search = document.getElementById("search");

search.addEventListener("keyup", (event) => {
    if (event.code == "Enter") {
        document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${search.value}")`;
    }
});

searchBtn.addEventListener("click", () => {
    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${search.value}")`;
});