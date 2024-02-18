
const DOWN = "down";
const UP = "up";
let startingX = 135;
let startingY = 30;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0, 
    attempts: 0, 
    waiting: false,
};
//array of images
letcardFaceArray = [];
let cardBack;
//adding the images
function preload() {
    cardBack = loadImage('images/cardback.png');
    cardFaceArray = [
        loadImage('images/red.jpg'),
        loadImage('images/orange.jpg'),
        loadImage('images/yellow.jpg'),
        loadImage('images/green.jpg'),
        loadImage('images/turquoise.jpg'),
        loadImage('images/blue.jpg'),
        loadImage('images/purple.jpg'),
        loadImage('images/pink.jpg'),
    ];
}

function setup() {
    createCanvas(800, 800);
    let selectedFaces = [];
    for (let z = 0; z <8; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        //double push adds two to selected faces
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so it doesn't get randomly selected again
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    //making the grid
    for (let j = 0; j <4; j++) {
    for (let i = 0; i < 4; i++) {
        //removing item in the last position of the array and returning it
        const faceImage = selectedFaces.pop();
        //instance
        cards.push(new Card(startingX, startingY, faceImage));
        startingX += 150;
    }
    //defining the start of new row
    startingY += 150;
    startingX = 135;
    
    }
}
   function draw () {
    background('#2b919b');
    if (gameState.numMatched === gameState.totalPairs) {
    fill("#a31e54");
    textSize(66);
    textFont('Gill Sans');
    text("Hooray! You won!", 160, 780);
    noLoop();
    }
   for(let k = 0; k < cards.length; k++) {
    if(!cards[k].isMatch) {
        cards[k].face = DOWN;
    }
    cards[k].show();
   }
   noLoop();
   gameState.flippedCards.length = 0;
   gameState.waiting = false;
   fill("#f1d6e1");
   textSize(36);
   textFont('Gill Sans');
   text('your attempts: ' + gameState.attempts, 295, 650);
   text('your matches: ' + gameState.numMatched, 295, 700);
}

//to show whether card has been clicked
function mousePressed(){
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        //first check flipped cards length and then we can trigger the card flip
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards [k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if(gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            //mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //empty the flipped cards array
            gameState.flippedCards.length = 0;
            //increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}
class Card {
    constructor(x, y, cardFaceImg) {
        //position
        this.x = x;
        this.y = y;
        //image width and height
        this.width = 90;
        this.height = 90;
        this.face = DOWN;
        //creating cardFaceImg property
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        //card front
        if (this.face === UP || this.isMatch) {
        fill('#aaa');
        rect(this.x, this.y, this.width, this.height, 10);
        image(this.cardFaceImg, this.x, this.y);
    } else {
        //card back
        fill('rgb(57, 74, 9.9%, 9.9%)');
        rect(this.x, this.y, this.width, this.height, 10);
        image(cardBack, this.x, this.y);
    }
    }
    //if mouse hits a card
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
//Every day I'm shuffling.
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
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

