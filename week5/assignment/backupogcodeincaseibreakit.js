
const DOWN = "down";
const UP = "up";
let startingX = 135;
let startingY = 30;
let cards = [];
const gameState = {
    totalPairs: 0,
    flippedCards: [],
    numberMatched: 0, 
    attempts: 0, 
    waiting: false
};
letcardfaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('images/cardback.png');
    cardfaceArray = [
        loadImage('images/red.jpg'),
        loadImage('images/orange.jpg'),
        loadImage('images/yellow.jpg'),
        loadImage('images/green.jpg'),
        loadImage('images/turquoise.jpg'),
        loadImage('images/blue.jpg'),
        loadImage('images/purple.jpg'),
        loadImage('images/pink.jpg'),
    ]
}

function setup(){
    createCanvas(800, 600);
    background("navy");
    let selectedFaces = [];
    for (let z = 0; z <8; z++) {
        const randomIndex = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIndex];
        //double push adds two to selected faces
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIndex, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j <4; j++) {
    for (let i = 0; i < 4; i++) {
        const faceImage = selectedFaces.pop();
        cards.push(new Card(startingX, startingY, faceImage));
        startingX += 150;
    }
    startingY += 150;
    startingX = 135;
}
   
}

// function draw (){
    
//     if (gameState.num === gameState.totalPairs){
//         fill("yellow");
//         textSize(66);
//         text("you win!!!", 400, 425);
//         noloop();
//     }
//     for(let k = 0; k < cards.length; k++){
//         if(!cards[k].isMatch){
//             cards[k].face = DOWN;
//         }
//         cards[k].show();
//     }
// }
//to show whether card has been clicked
function mousePressed(){
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++){
        //first check flipped cards length and then we can trigger the flip.
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards [k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if(gameState.flippedCards.length == 2) {
       if (gameState.flippedCards[0].faceImage === gameState.flippedCards[1].faceImage) {
        //cards match! time to score!
        // mark cards as matched so they don't glip back
        gameState.flippedCards[0].isMatch = true;
        gameState.flippedCards[1].isMatch = true;
        //empty the flipped cards array
        gameState.flippedCards.length = 0;
        //increment the score
        gameState.numMatched++;
        loop();
       } else {
        gameState.waiting = true;
            const loopTimeout = window.setTimeout(() =>{
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
       }
    }
}
class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 90;
        this.height = 90;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        if (this.face === UP || this.isMatch) {
        fill('#aaa');
        rect(this.x, this.y, this.width, this.height, 10);
        image(this.cardFaceImg, this.x, this.y);
    } else {
        fill('rgb(57, 74, 9.9%, 9.9%)');
        rect(this.x, this.y, this.width, this.height, 10);
        image(cardBack, this.x, this.y);
    }
    }
    didHit(mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
            
    }
    flip() {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0){
        //pick random index
        const idx = Math.floor(Math.random() * counter);
        // decrease counter by 1 (decrement)
        counter--;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}
