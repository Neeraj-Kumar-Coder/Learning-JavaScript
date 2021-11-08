console.log("Async Await in JavaScript");

async function getData() {
    let url = 'https://api.github.com/users';
    const response = await fetch(url);
    const val = await response.json();
    return val;
}

getData().then(data => console.log(data));