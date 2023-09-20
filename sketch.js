let xpos = 100;
let width = 600;
let height = 600;

function setup() {
    createCanvas(width, height);
}

function draw() {
    background(125,125,200);
    strokeWeight(0);

    // rect(xpos, 10,30,30);
    // rect(xpos, 50,30,30);
    // rect(xpos, 90,30,30);

    // rect(mouseX, mouseY, 30, 30);

    // print in p5.js
    // print(mouseX, mouseY);
    // print in JS
    // console.log(mouseX, mouseY);

    if (mouseX < width/2){
        fill(255, 125,125);
    } else {
        fill(125,255,125);
    }
    rect(mouseX, mouseY, 30, 30);
}
