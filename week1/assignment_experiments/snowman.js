let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "turquoise");
let stroke2 = prompt("enter another basic color name in lower case", "purple");
function setup(){
    createCanvas(1000, 800);
    background("#ccc");
    //grid = loadImage("images/100px_grid.png");
}
function draw() {
    background(204, 204, 255);
    //snowman legs
    fill("#f1f1f1");
    strokeWeight(20)
    stroke(stroke1);
    //left leg
    ellipse(350, 650, 200); 
    //right leg
    ellipse(650, 650, 200);
    //body
    ellipse(500, 450, 350, 400);
    //head
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    //hat body
    quad(475, 50, 600, 50, 550, 120, 450, 120);
    //eyes
    stroke(0);
    strokeWeight(35);
    point(425, 200);
    point(575, 200);
    //buttons
    stroke(0);
    strokeWeight(15);
    point(500, 400);
    point(500, 475);
    point(500, 550);
    //mouth
    nofill();
    strokeWeight(10);
    arc(500, 200, 80, 80, 0, HALF_PI);

}