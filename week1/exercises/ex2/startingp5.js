function setup () {
    createCanvas (displayWidth, displayHeight); {
        background (191, 148, 228);

    }
    
}
function draw () {
    background (220);
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

    
  