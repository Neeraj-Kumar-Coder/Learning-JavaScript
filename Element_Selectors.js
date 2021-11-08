console.log('Learning element selectors in JavaScript');

// let element = document.getElementById('home');
// element.innerText = 'This is changed by JavaScript';
// element.style.backgroundColor = 'red';
// console.log(element);

let element1 = document.getElementsByClassName('listitems');
console.log(element1);
for (let index = 0; index < element1.length; index++) {
    element1[index].style.fontSize = '20px';
    element1[index].style.color = 'white';
    element1[index].style.textDecoration = 'underline';
    if (index & 1) {
        element1[index].style.backgroundColor = 'red';
    }
    else {
        element1[index].style.backgroundColor = 'black';
    }
}

let pEle = document.querySelector('p');
pEle.style.color = 'yellow';
pEle.style.fontSize = '20px';
pEle.style.fontWeight = 'bold';
pEle.style.backgroundColor = 'purple';