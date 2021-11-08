console.log("Welcome to the magic notes website");
displayNotes();

let addNoteBtn = document.getElementById("addNoteBtn");
addNoteBtn.addEventListener("click", function (e) {
    let txtHead = document.getElementById("titleOfNote");
    let txtArea = document.getElementById("txtArea");
    let note = `<span style="font-size: 10px;"> ${new Date()} </span> <br>` + txtArea.value;
    let title = txtHead.value;
    txtArea.value = "";
    txtHead.value = "";
    // Saving to the localStorage
    let noteArray = JSON.parse(localStorage.getItem("note"));
    let titleArray = JSON.parse(localStorage.getItem("title"));
    if (noteArray == null) {
        noteArray = [];
    }
    if (titleArray == null) {
        titleArray = [];
    }
    noteArray.push(note);
    titleArray.push(title);
    localStorage.setItem("note", JSON.stringify(noteArray));
    localStorage.setItem("title", JSON.stringify(titleArray));
    // Saving to the localStorage [END]
    displayNotes();
});

function displayNotes() {
    let noteArray = JSON.parse(localStorage.getItem("note"));
    let titleArray = JSON.parse(localStorage.getItem("title"));
    let noteCards = document.getElementsByClassName("noteCards")[0];
    let html = "";
    if (noteArray == null || noteArray.length == 0) {
        html = "Your Notes Will Appear Here";
    }
    else {
        for (let index = 0; index < noteArray.length; index++) {
            const element = noteArray[index];
            const title = titleArray[index];
            html += `
            <div class="card">
            <h3 style="text-align: center;">Note ${index + 1}<br> ${title}</h3>
            <p>${element}</p>
            <button id = ${index} onclick="deleteNote(this.id)" class="btn delBtn" style="display: block; margin: auto;" >Delete Note</button>
            </div>
            `;
        }
    }
    noteCards.innerHTML = html;
}

function deleteNote(index) {
    let noteArray = JSON.parse(localStorage.getItem("note"));
    noteArray.splice(index, 1);
    localStorage.setItem("note", JSON.stringify(noteArray))
    displayNotes();
}

let search = document.getElementById("search");

search.addEventListener("input", function () {
    let data = search.value.toLowerCase();
    let paraInNote = document.getElementsByClassName("card");
    for (let index = 0; index < paraInNote.length; index++) {
        const element = paraInNote[index];
        if (!element.innerText.toLowerCase().includes(data)) {
            element.style.display = "none";
        }
        else {
            element.style.display = "block";
        }
    }
});

let deleteAllNoteBtn = document.getElementById("deleteAllNoteBtn");

deleteAllNoteBtn.addEventListener("click", function () {
    let value = confirm("You are about to delete all the notes!!!");
    if (value) {
        localStorage.clear();
        displayNotes();
    }
});