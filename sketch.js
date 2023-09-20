let maxDiam = 100;
let minDiam = maxDiam/10;

let width = 600;
let height = 600;

function setup() {
    createCanvas(width, height);
}

function draw() {
    background(125,125,200);
    fill("pink");
    randomSeed(0); // freeze the set of random number, so for every frame we have the same random number set

    for (let i=0; i<=width; i+= maxDiam) {
        for (j=0; j<=height; j+= maxDiam){
            let tDiam = random(minDiam, maxDiam);
            ellipse(i, j, tDiam);         
        }
    }
}
