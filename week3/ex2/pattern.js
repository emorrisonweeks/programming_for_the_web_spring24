function setup() {
    createCanvas (600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor, circleOutlineColor, dotColor, secondDotColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(secondaryColor);
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
   
    noStroke();
    fill(dotColor);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    
    fill(secondDotColor);
    circle(100, 30, 30);
    circle(50, 80, 30);
    circle(150, 80, 30);
    circle(100, 130, 30);
   
    noFill();
    stroke(circleOutlineColor);
    strokeWeight(5);
    circle(25, 25, 15);
    circle(25, 175, 15);
    circle(175, 25, 15);
    circle(175, 175, 15);
   
  
    
}
function draw() {
    createTile(0, 0, "hotpink", "purple", "lightblue", "teal", "lightgreen");
    createTile(0, 200, "purple", "lightblue", "teal", "lightgreen", "hotpink");
    createTile(0,200, "hotpink", "purple", "lightblue", "teal", "lightgreen");
    createTile(200, -400, "purple", "lightblue", "teal", "lightgreen", "hotpink");
    createTile(0, 200, "hotpink", "purple", "lightblue", "teal", "lightgreen");
    createTile(0, 200, "purple", "lightblue", "teal", "lightgreen", "hotpink");
    createTile(200,-400, "hotpink", "purple", "lightblue", "teal", "lightgreen");
    createTile(0, 200, "purple", "lightblue", "teal", "lightgreen", "hotpink");
    createTile(0,200, "hotpink", "purple", "lightblue", "teal", "lightgreen");
}