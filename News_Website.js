console.log("This is a news website using AJAX");

// News API intialization
let country = "in";
let apiKey = "b6c492dd282d458e83fa9ece22361081";

const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);
xhr.onload = function () {
    let fetchedData = JSON.parse(this.responseText).articles;
    let newsArea = document.getElementById("news-here");
    let html = "";
    for (let index = 0; index < fetchedData.length; index++) {
        if (fetchedData[index].description != null) {
            html += `
            <div class="newsCard">
                <div class="title">
                    <h2> Headline - ${index + 1}: ${fetchedData[index].source.name} </h2>
                    <h3>${fetchedData[index].title}</h3>
                </div>
                <p>${fetchedData[index].description}</p>
                <p><a href="${fetchedData[index].url}" target="_blank"> Read more here </a></p>
            </div>`;
        }
        else {
            html += `
            <div class="newsCard">
                <div class="title">
                    <h2> Headline - ${index + 1}: ${fetchedData[index].source.name} </h2>
                    <h3>${fetchedData[index].title}</h3>
                </div>
                <p>${fetchedData[index].title}</p>
                <p><a href="${fetchedData[index].url}" target="_blank"> Read more here </a></p>
            </div>`;
        };
    }
    newsArea.innerHTML = html;
}
xhr.send();