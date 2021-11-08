console.log("This is a dictionary website using the free dictionary API");

let form = document.getElementById("searchForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let word = document.getElementById("word").value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, true);
    xhr.onprogress = function () {
        console.log("Getting the meaning for you");
    }
    xhr.onload = function () {
        let response = JSON.parse(this.response);
        let meanings = "";
        let phonetics = "";
        response[0].meanings.forEach(function (ele, index) {
            meanings += `
                <h2> Interpretation ${index + 1} </h2>
                <h3> Part of speech: </h3>
                <p> ${ele.partOfSpeech} </p>
                <h3> Meaning: </h3>
                <p> ${ele.definitions[0].definition} </p>
                <h3> Example: </h3>
                <p> ${ele.definitions[0].example} </p>
                <br>
            `;
        });

        response[0].phonetics.forEach(function (ele, index) {
            phonetics += `
                <h2> Phonetics ${index + 1} </h2>
                <h3> Phonetic: </h3>
                <p> ${ele.text} </p>
                <h3> Audio Link: </h3>
                <a href = "${ele.audio}" target="_blank"> Click Here to Listen </a>
                <br>
            `;
        });
        let html = `
                <h1 class="heading centre">Description of the word: "${response[0].word}" </h1>
                ${phonetics}
                ${meanings}`;

        let printArea = document.getElementById("desHere");
        printArea.innerHTML = html;
        document.getElementById("word").value = "";
    }
    xhr.send();
});