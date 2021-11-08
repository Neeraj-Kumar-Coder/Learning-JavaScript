console.log("This is a Library Management System");

let form = document.getElementById("bookform");
let count = 1;
let html = "";

function addBook(e) {
    e.preventDefault();
    let name = document.getElementById("bookName").value;
    document.getElementById("bookName").value = "";
    let author = document.getElementById("bookAuthor").value;
    document.getElementById("bookAuthor").value = "";
    let type;
    let action = document.getElementById("action");
    let programming = document.getElementById("programming");
    let horror = document.getElementById("horror");

    if (name.length < 2 || author.length < 2) {
        alert("Can't add the book. Please enter a valid book");
    }
    else {

        if (action.checked) {
            type = "Action";
        }
        else if (programming.checked) {
            type = "Programming";
        }
        else if (horror.checked) {
            type = "Horror";
        }
        else {
            type = "Other"
        }

        html += `
                    <tr>
                        <td>${count}</td>
                        <td>${name}</td>
                        <td>${author}</td>
                        <td>${type}</td>
                    </tr>
                    `;
        count++;

        let bookshow = document.getElementById("bookshow");
        bookshow.innerHTML = html;
    }
}

form.addEventListener("submit", addBook);