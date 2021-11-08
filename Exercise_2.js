console.log("Editable div exercise");

let divCont = document.createElement("div");
divCont.setAttribute("id", "container");
let val = localStorage.getItem("text");
if (val == null)
    divCont.innerHTML = "Enter your text here."
else
    divCont.innerHTML = val
divCont.style.maxWidth = "50vw";
divCont.style.border = "3px solid black";
divCont.style.margin = "auto";

let target = document.querySelector("#head2");

target.after(divCont)

divCont.addEventListener("click", function () {
    let count = document.getElementsByTagName("textarea").length;
    if (!count) {
        let temp = divCont.innerHTML;
        divCont.innerHTML = `<textarea id="txt" cols="100" rows="10">${temp}</textarea>`
    }
    let txtArea = document.getElementById("txt");
    txtArea.addEventListener("blur", function () {
        localStorage.setItem("text", txtArea.value);
        divCont.innerHTML = txtArea.value;
    })
})