function setup() {
    createCanvas(200, 200);
    noLoop();
}
function createTile() {
    translate(0, 0);
    fill('purple');
    rect(0, 0, 200, 200);
    stroke("hotpink");
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill("lightblue");
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke("hotpink");
    strokeWeight(5);
    circle(100, 100, 100);
}

function draw() {
    createTile();
}