console.log("Practicing Regular Expressions (REGEX)");

let matchFindButton = document.getElementById("find-match");
let clearButton = document.getElementById("clear-result");

function clickHandler() {
    let regex = document.getElementById("regex").value;
    let string = document.getElementById("string").value;
    let showArea = document.getElementById("showoutput");

    // Checking for the flags
    let flags = "";
    if (document.getElementById("global").checked) {
        flags += 'g';
    }
    if (document.getElementById("case-insensitive").checked) {
        flags += 'i';
    }
    // Flags checking done

    regex = new RegExp(regex, flags);
    string = new String(string);

    let result;
    let html = `<h1>MATCH RESULTS</h1>
                <p><strong>Your Regex:</strong> ${regex}</p>
                <p><strong>Your String:</strong> ${string}</p>`;

    let temp = undefined;
    for (let index = 0; result = regex.exec(string); index++) {
        if (temp && result.index == temp.index) { break; } // For non global search
        html += `<h2>Match ${index + 1}</h2>
                <p><strong>MATCH:</strong> ${result[0]}</p>
                <p><strong>INDEX:</strong> ${result.index}</p>
                <p><strong>GROUPS:</strong> ${result.groups}</p>
                <p><strong>INPUT:</strong> ${result.input}</p>`;
        temp = result;
    }

    showArea.innerHTML = html;
}

function clearHandler() {
    document.getElementById("regex").value = "";
    document.getElementById("string").value = "";
    document.getElementById("showoutput").innerHTML = "";
    document.getElementById("global").checked = false;
    document.getElementById("case-insensitive").checked = false;
}

matchFindButton.addEventListener("click", clickHandler);
clearButton.addEventListener("click", clearHandler);