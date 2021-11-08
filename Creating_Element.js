console.log('Creating an element and inserting in the DOM');

// let createdElement = document.createElement('li');
// createdElement.className = 'headbyJS';
// createdElement.id = 'idbyJS';
// createdElement.innerText='This is edited by JS';

// let grab = document.querySelector('ul');
// grab.appendChild(createdElement);
// console.log(createdElement);

let ele1 = document.createElement('h1');
ele1.id = 'JSid';
ele1.className = 'JSclass';
ele1.innerText = 'JStext';
ele1.style.fontSize = '20px';
ele1.style.border = '2px solid black';
ele1.style.backgroundColor = 'black';
ele1.style.color = 'white';
ele1.style.padding = '3px';
ele1.style.margin = '3px';
ele1.style.borderRadius = '5px';
console.log(ele1);

let target1 = document.querySelector('p');
target1.appendChild(ele1);

// document.getElementById('about').style.display = 'none'; // To remove visiblility using display property