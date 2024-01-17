function setup () {
    createCanvas (1000, 1000);
}
function draw () {
    background (	90.2, 90.2, 98);
    ellipse (50, 50, 80, 100);
}
window.prompt("ready to paint?") 

function draw() {
    if (mouseIsPressed) {
      fill(127, 255, 212);
    } else {
      noFill();
      noStroke();
    }
    ellipse(mouseX, mouseY, 80, 80);
  }

    
  