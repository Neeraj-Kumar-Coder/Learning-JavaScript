console.log("Error Handling in JavaScript");

try {
    thisFunctionDonotExist();
} catch (error) {
    console.log("An error occured");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("This will always execute");
}

let a;
if (a == undefined) {
    throw new Error("The script cannot be executed further");
}
else {
    console.log("Further execution is possible");
}