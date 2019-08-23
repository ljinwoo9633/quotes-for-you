const body = document.querySelector('body');
const backgroundFolder = '../images';

function genRandomNumber(number){
    return Math.floor(Math.random() * number) + 1;
}

function printBackground(number){
    const img = new Image();
    img.src = `../images/${number}.jpg`;
    img.classList.add('background-image');
    img.draggable = false;
    body.appendChild(img);
}

function init(){
    const number = genRandomNumber(20);
    printBackground(number);
}

init();