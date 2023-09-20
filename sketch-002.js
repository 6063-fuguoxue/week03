let width = 600;
let height = 600;

let eDiam = 50;
let maxDiam = 50;
let minDiam = 5;
let step = 8;

function setup() {
    createCanvas(width, height);
}

function draw() {
    background(125,125,200);
    strokeWeight(1);
    fill("pink");

    for (let i=0; i<width/eDiam; i++) {
        for (j=0; j<height/eDiam; j++){
            for (let dim = maxDiam; dim > minDiam; dim-=step) {
                ellipse(eDiam/2 + eDiam*i, eDiam/2 + eDiam*j, dim);
            }            
        }
    }
}
