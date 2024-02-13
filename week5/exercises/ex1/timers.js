//TIMERS are COOL
//declaring variables
let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 20;
const distance = 2;
//canvas setup
function setup (){
    createCanvas(500, 500);
    background(0);
    drawBlock(blockX, blockY);
}
//drawing the block
function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}
//show which keys are typed on the keyboard console and by changing block values of grey
function keyTyped(){
    let keyToNumber = Number(key);
    if(isNaN(keyToNumber)){
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    blockColor = keyToNumber;
    console.log("converted number", keyToNumber);
    console.log ("key to number", keyToNumber);    
}
window.setTimeout(()=>{
//stop block once it is out of bounds
drawTimer = window.setInterval(() => { 
    if(blockY - 50 <= height) {
    drawBlock(blockX, blockY, blockColor); 
    blockY += distance;
    } else {
        blockY = 0;
        blockX += 50;
    }
    //cancels timer
    if (blockY - 50 > height && blockX - 50 > width){
        window.clearInterval(drawTimer);
        alert("done");
    }
})
}, speed);