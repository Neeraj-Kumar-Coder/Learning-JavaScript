function startSearch(name) {
    let btn = document.querySelector(".next-btn");
    let int = setInterval(() => {
        let arr = Array.from(document.getElementsByClassName("ranking-username"));
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].innerText == name)
                alert("Found the name");
        }
        btn.click();
    }, 1500);
    return int;
}

function stopSearch(searchID) {
    clearInterval(searchID);
}