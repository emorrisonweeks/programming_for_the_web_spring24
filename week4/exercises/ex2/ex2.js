//setting up variables
let rectX = 0;
const rectWidth = 75;
clickCount = 0;
let speed;

//creating canvas and speed
function setup (){
    createCanvas(500, 500);
    background(11, 31, 64);
    speed = random (1, 3);
}
//drawing, including speed and click count message
function draw () {
    background(11, 31, 64);
    drawShape();
    rectX += speed;
    if(rectX > width) {
        noLoop();
        text("Your score was " + clickCount, 100, 300);
    }
}
//if mouse is pressed, console will show "hit" and number of clicks
function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >=0 && mouseY <= 75)) {
        clickCount++;
        console.log("hit", clickCount);
    }
}
//drawing small shape
function drawShape() {
    fill("lightgreen");
    rect(rectX, 0, 75, 75);
}