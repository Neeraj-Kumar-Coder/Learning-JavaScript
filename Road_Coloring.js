console.log('Coloring the path by adding some delay');

for (let i = 0; i < 50; i++) {
    setTimeout(function () {
        document.getElementById(`${i}`).style.backgroundColor = 'blue';
        let temp = i;
        while (temp--) {
            document.getElementById(`${temp}`).style.backgroundColor = 'lightblue';
        }
    }, 50 * (i + 1));
}