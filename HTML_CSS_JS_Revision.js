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

// Promise from here
let myPromise = new Promise((resolve, reject) => {
    resolve(7);
});

myPromise.then((value) => {
    console.log(`Promise is resolved with value ${value}`);
}, (error) => {
    console.log(`Promise is rejected with error : ${error}`);
});

// Promise chaining
let basePromise = new Promise((resolve, reject) => {
    resolve("I am resolved");
});

basePromise.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        resolve("This is second promise that is being resolved");
    });
}).then((value) => {
    console.log(value);
    return "Finally I am resolving out!";
}).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});

// Attaching multiple handlers to a Promise
let multiHandlePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am resolved after 3 seconds");
    }, 3000);
});

multiHandlePromise.then((value) => {
    console.log(`This is from handler number 1 : ${value}`);
});

multiHandlePromise.then((value) => {
    console.log(`Lets concatinate the result ${">>>" + value + "<<<"}`);
});

// Learning about Promise API

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am resolved with value 1!");
    }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am resolved with value 2!");
    }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am resolved with value 3!");
    }, 3000);
});

// >>>>>>>This is the classical method that we would do if we want to run a piece of code that should execute after all the promise gets resolved
// promise1.then((value1) => {
//     promise2.then((value2) => {
//         promise3.then((value3) => {
//             console.log(value1, value2, value3);
//         });
//     });
// });

// let promise_all = Promise.all([promise1, promise2, promise3]);
// let promise_all = Promise.allSettled([promise1, promise2, promise3]);
// let promise_all = Promise.race([promise1, promise2, promise3]);
let promise_all = Promise.any([promise1, promise2, promise3]);
promise_all.then((value) => {
    console.log(value);
});

// async - await in JS
function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hey! I am resolved`);
        }, 3000);
    });
}

const data = async () => {
    let value = await getPromise();
    console.log(value);
}

data();

// try catch
console.log("Revising the concepts of JavaScript");

try {
    // setTimeout(() => {
    //     throw new Error("This is NOT a valid script");
    // }, 0);
    throw new Error("This is NOT a valid script");
} catch (error) {
    console.log(error);
}

console.log("This is the last line of the script");

try {
    console.log(variableNotDefined);
}
catch (error) {
    console.log(error);
}
finally {
    console.log("This is always run irrespective of any error in the try and catch block");
}


const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        const element = document.createElement("script");
        element.src = src;
        document.head.appendChild(element);
        element.onload = () => {
            resolve(src);
        }
        element.onerror = (reason) => {
            reject(reason)
        }
    });
}

async function loadIt() {
    console.time("startedLoading");
    const result = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
    console.log(result);
    console.timeEnd("startedLoading");
}

loadIt();

// Fetch API
const getUsers = async () => {
    let response = await fetch("https://reqres.in/api/users");
    console.log(await response.json());
}

getUsers();