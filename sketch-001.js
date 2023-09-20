let xpos = 150;
let ypos = 200;
let width = 600;
let height = 600;
let rectWidth = 300;
let rectHeight = 200;

function setup() {
    createCanvas(width, height);
}

function draw() {
    background(125,125,200);
    strokeWeight(0);

    if (mouseX > xpos && mouseX < (xpos + rectWidth) && mouseY > ypos && mouseY < (ypos + rectHeight)) {
        fill(255,255,125);
    }
    else {fill(255);}
    
    rect(xpos, ypos, rectWidth, rectHeight);
}
