let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "turquoise");
let stroke2 = prompt("enter another basic color name in lower case", "purple");
function setup(){
    createCanvas(1000, 800);
    background("#ccc");
    //grid = loadImage("../images/100px_grid.png");
}
function draw() {
    background(66, 104, 124);
    //snowflakes
    stroke(255);
    strokeWeight(20);
    point(100, 300);
    point(825, 200);
    point(800, 350);
    point(200, 325);
    point(125, 100);
    point(150, 575);
    point(900, 600);
    point(930, 700);
    point(850, 100);
    point(250,250);
    point(900,400);
    //horizon or ground
    stroke("#f1f1f1");
    fill("#f1f1f1");
    quad(0, 1000, 0, 1000, 0, 400, 1000, 800);
    //snowman legs
    fill("#f1f1f1");
    strokeWeight(20)
    stroke(stroke1);
    //bottom snowball
    ellipse(500, 750, 500); 
    //middle snowball
    ellipse(500, 450, 350, 400);
    //head snowball
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    //hat body
    quad(475, 50, 600, 50, 550, 120, 450, 120);
    //eyes
    stroke(0);
    strokeWeight(15);
    point(465, 200);
    point(525, 200);
    //nose
    stroke(255, 165, 0);
    strokeWeight(25);
    ellipse(500, 240, 50, 10)
    //buttons
    stroke(0);
    strokeWeight(15);
    point(500, 400);
    point(500, 475);
    point(500, 550);
    
    
    

}