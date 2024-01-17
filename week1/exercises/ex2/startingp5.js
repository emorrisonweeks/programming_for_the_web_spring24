function setup () {
    createCanvas (1000, 1000);
}
function draw () {
    background (220);
    ellipse (50, 50, 80, 100);
}
function draw() {
    if (mouseIsPressed) {
      fill(127, 255, 212);
    } else {
      noFill();
      noStroke();
    }
    ellipse(mouseX, mouseY, 80, 80);
  }