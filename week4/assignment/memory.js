//setting up variables
let rectX = 0;
const rectWidth = 75;
let startingX = 50;
let startingY = 50;
let boxWidth = 90;
let boxHeight = 90;


//creating canvas and setting background color
function setup (){
    createCanvas(500, 500);
    background(11, 31, 64);
   
}
//drawing the grid
function draw () {
    noLoop();
    for(let rows = 0; rows < 4; rows++) {
        //inner loop handles columns
        for(let columns = 0; columns < 4; columns++) {
            rect(startingX, startingY, boxWidth, boxHeight);
            //every iteration, move startX by 100
            startingX += 100;
        }
        startingY += 100;
        startingX = 50; 
    }
    
    }
