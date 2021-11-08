console.log("Call Back Functions in JavaScript");
console.log("A callback is a function passed as an argument to another function.");

// Pretending that this response is coming from a server
const students = [
    { name: "Neeraj", skill: "Web-D" },
    { name: "Tushar", skill: "Backend" },
    { name: "Neha", skill: "Extrovert" }
];

function enrollStudent(student, callback) {
    setTimeout(function () {
        students.push(student);
        console.log("Student have been enrolled");
        callback();
    }, 3000);
}

function getStudentList() {
    setTimeout(() => {
        let printArea = document.getElementById("stdlist");
        let str = "";
        students.forEach(function (stu) {
            str += `<li> ${stu.name}, ${stu.skill} </li>`;
        });
        printArea.innerHTML = str;
        console.log("Student list has been populated");
    }, 1000);
}

let newStudent = { name: "Sameer", skill: "Gaming" };
enrollStudent(newStudent, getStudentList);