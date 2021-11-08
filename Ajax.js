console.log("Learning Ajax");

let getBtn = document.getElementById("getBtn");

getBtn.addEventListener("click", clickHandler);

function clickHandler() {
    console.log("You clicked the Get Data button");

    // Instantiate an XHR Object
    const xhr = new XMLHttpRequest();

    // Opening the Object
    xhr.open("GET", "Ajax.txt", true);

    // What to do when the work is in progress (optional)
    xhr.onprogress = function () {
        console.log("The work is in progress...");
    }

    // State Change
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    xhr.onreadystatechange = function () {
        console.log("The state has changed to ", xhr.readyState);
    }

    // What to do when the Response is ready
    xhr.onload = function () {
        // 200 is HTTP response status code for OK
        // Reference = https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log("Some Error Has Occured");
        }
    }

    // Send the request
    xhr.send();
}