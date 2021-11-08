// Website Crawler

let keyWord = prompt('Enter the keyword which you want to search for the link.');
// Fetching all the links
let allLinks = document.links;

// Converting the HTML collection to array and then iterating it
Array.from(allLinks).forEach(function (element) {
    if (element.href.includes(keyWord)) {
        console.log(element.href);
    }
});