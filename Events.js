console.log('Learning events and event listeners');

// Adding the click event

document.getElementById('home').addEventListener('click', function () {
    console.log('You have clicked Home menu');
});


document.querySelector('#about').addEventListener('click', function (e) {
    console.log(e.offsetX); // With respect to element
    console.log(e.clientX); // With respect to page
})

let listOfItems = document.getElementsByClassName('listitems');
Array.from(listOfItems).forEach(function (ele) {
    ele.addEventListener('click', function () {
        console.log(ele);
    })
})

// Mouse move event

let changeBG = function (e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX % 255}, ${e.offsetY % 123}, ${e.offsetX % 100})`;
    console.log(`haha`)
};

document.querySelector('html').addEventListener('mousemove', changeBG);