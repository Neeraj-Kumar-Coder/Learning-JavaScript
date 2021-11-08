/*
    The function inside then() is the resolve method
    The function inside catch() is the reject method
    which are passed as a callback in the promise()
*/
console.log("Promises in JavaScript");

function promiser() {
    return new Promise(function (resolve, reject) {
        const error = false;
        if (!error) {
            console.log("The promise have been fullfilled");
            resolve();
        }
        else {
            console.log("The promise have not been fullfilled");
            reject();
        }
    });
}

promiser().then(function () {
    console.log("Neeraj: Thanks for accepting the request");
}).catch(function () {
    console.log("Neeraj: Oh, not good brooo...");
});