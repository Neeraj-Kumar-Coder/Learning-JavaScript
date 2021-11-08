console.log("Fetch API in JavaScript");

// GET request using fetch api
function getData() {
    let url = 'https://api.github.com/users';
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
}

getData();


// POST request using fetch api
function postData() {
    let url = 'https://dummy.restapiexample.com/api/v1/create';
    let data = `{"name":"assassin984478","salary":"93123","age":"2343"}`;
    let params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data);
        body: data
    };
    fetch(url, params).then(response => response.json()).then(data => console.log(data));
}

postData();