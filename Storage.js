console.log("There are two types of storage : local and session storage");

localStorage.setItem("Name", "Neeraj");
localStorage.setItem("ID", "2020UCA1809");

// localStorage.clear(); // To clear the local storage - entierly

// localStorage.removeItem("Name"); // To remove a particular key-value pair via key

console.log(localStorage.getItem("Name"));

// How to store array as a key-value pair?

let impArr = [1, 2, 3, 4, 5];
// localStorage.setItem("imp", impArr); // Stores array by converting to a string
// console.log(localStorage.getItem("imp"));

// storing as array using JSON

localStorage.setItem("imp", JSON.stringify(impArr));
console.log(JSON.parse(localStorage.getItem("imp")));



/* SESSION STORAGE */
// clears data when the browser is closed


sessionStorage.setItem("Name", "Neeraj");
sessionStorage.setItem("ID", "2020UCA1809");

console.log(sessionStorage.getItem("Name"));

// sessionStorage.clear();