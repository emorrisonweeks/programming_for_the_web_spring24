let myCard;
function setup(){
    createCanvas(800, 600);
    background(0);
    let myCard = new Card();
    myCard.show();
}

//to show whether card has been clicked
function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
}
class Card {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.width = 80;
        this.height = 100;
    }
    show () {
        fill('rgb(57, 74, 9.9%, 9.9%');
        rect(this.x, this.y, this.width, this.height, 10);
    }
}

didHit(mouseX, mouseY){
    if(mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height){
        return true;
    } else {
        return false;
    }
}
