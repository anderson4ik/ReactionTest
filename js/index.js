let start = new Date().getTime();
const shape = document.querySelector('#shape');
const timeSpan = document.querySelector('#time');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the 
    //minimum is inclusive 
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function getRandomTime() {
    return (Math.random() * 2200);
}

function makeShapeAppear() {
    let top = getRandomIntInclusive(0, 300);
    let left = getRandomIntInclusive(0, 800);
    let color = getRandomColor();
    let width = getRandomIntInclusive(100, 400);

    setTimeout(() => {
        if (top % 2) {
            shape.style.borderRadius = '50%';
        } else {
            shape.style.borderRadius = '0';
        }

        shape.style.width = `${width}px`;
        shape.style.height = `${width}px`;
        shape.style.top = `${top}px`;
        shape.style.left = `${left}px`;
        shape.style.backgroundColor = `${color}`;
        shape.style.display = 'block';
        start = new Date().getTime();
    }, getRandomTime());
}

makeShapeAppear();

shape.addEventListener('click', (event) => {
    var end = new Date().getTime();
    shape.style.display = 'none';
    let time = (end - start) / 1000;
    timeSpan.textContent = `${time} s`;
    makeShapeAppear();
});