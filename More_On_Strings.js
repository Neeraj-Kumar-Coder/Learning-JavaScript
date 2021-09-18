console.log('This is more on strings');

let aboutMe = 'Neeraj Kumar. Age 20 years and a student of CSAI section 1';

console.log(aboutMe);
console.log(aboutMe.length);
console.log(aboutMe[3]);
console.log(aboutMe.toLowerCase());
console.log(aboutMe.toUpperCase());
console.log(aboutMe.includes('Neeraj'));
console.log(aboutMe.slice(-9));
console.log(aboutMe.split(' '));
console.log(aboutMe.indexOf('year'));
console.log(aboutMe.lastIndexOf('a'));

let HTML = `<h1> This is a heading </h1>
            <p> Hello ${aboutMe} </p1>`; // Template strings


document.body.innerHTML = HTML;