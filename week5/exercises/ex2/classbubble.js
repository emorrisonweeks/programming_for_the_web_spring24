//declare bubble 
let bubble; 

//setting up
function setup() {
    createCanvas(600, 400);
    bubble = new Bubble ();
    print(bubble.x, bubble.y);
}
//draw the bubble
function draw() {
    background(0);
    bubble.move();
    bubble.show();
}

//the details of what it means to be a bubble
class Bubble{
    constructor(){
        this.x = 200;
        this.y = 150;
    }
    move(){
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show(){
        stroke("purple");
        strokeWeight(10);
        noFill();
        ellipse(this.x, this.y, 100, 100);
    }

    }
   


