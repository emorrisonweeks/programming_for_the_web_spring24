//definitions
let questionInput;
let currentQuestion;
let response;
let responseColor = "black";
let heading;
let wrongCount = "0";
let wrongAnswer = "Wrong Answers: 0";
let wrongAnswerColor = "black";
//Setting up the questions and answers for the quiz
let statementDefault = [
    {question:"Fill in the blank to finish the quote. 'Hello. My name is Inigo Montoya. You killed my ____. Prepare to die." , 
    answer: "father"},
    {question:"Who wrote The Princess Bride?" , 
    answer: "William Goldman"},
    {question:"Which actor was almost cast in the role of Fezzik instead of Andre Roussimoff?" , 
    answer: "Arnold Schwarzenegger"},
    {question:"What size is the rodent found in the fire swamp?" , 
    answer: "unusual size"},
    {question:"Fill in the blank to complete the quote. 'Stop rhyming, I mean it.' 'Anybody want a _____?'" , 
    answer: "peanut"},
    {question:"Which creatures in the film were not in the original novel?" , 
    answer: "shrieking eels"},
    {question:"What are the names of the two rival kingdoms in the movie?" , 
    answer: "Florin and Guilder"},
    {question:"Which fictional vigilante inspired the costume for the Dread Pirate Roberts?" , 
    answer: "Zorro"},
];
let statements = statementDefault;
    
 function next() {
    //alert if player wins the game
    if(statements.length < 1) {
        alert("Woohoo! You won!");
        return;
    }
    //random math
    const randomIndex = Math.ceil(Math.random() *
     statements.length -1);
    return statements[randomIndex];
}
//checking the question
function checkQuestion () {
    if(currentQuestion.answer === questionInput.value ()) {
        //remove correct answer from array
        statements = statements.filter(statementsObj => {
            return currentQuestion.answer !== statementsObj.answer;
            
        });
        // this is the correct condition
        response = "Hooray, you are correct! Next question.";
        responseColor = "green";
    } else {
        //wrong answer counter
        wrongCount ++;
        wrongAnswer = `Wrong Answers: ${wrongCount}`;
        //if 5 wrong answers
        if (wrongCount > 4){
            alert("You have lost the game.");
        } else {
        //after a wrong answer
        response = "Uh oh, that was not correct. Try another.";
        responseColor = "red";
        }
    }
    currentQuestion = next ();
    questionInput.value("");
    message = currentQuestion.question || "";
    }
currentQuestion = next();
let message = currentQuestion.question;
//creating the heading, quiz question input, and buttons
function setup() {
    createCanvas(windowWidth, windowHeight);
    //heading
    heading = createElement("h1", ["Princess Bride Quiz"]);
    heading.position(100, 100);
    //quiz input
    questionInput = createInput("");
    questionInput.size(400, 30);
    questionInput.position(100, 220);
    //submit button
    submitButton = createButton("submit")
    submitButton.size(250, 24);
    submitButton.mousePressed(checkQuestion);
    submitButton.position(100, 260);
    //reset button
    resetButton = createButton("reset");
    resetButton.size(80, 24);
    resetButton.mousePressed(restart);
    resetButton.position(400, 260);
}
//upon restarting
function restart() {
    statements = statementDefault;
    wrongCount = 0;
    wrongAnswer = "Wrong Answers: 0"
    response = "";
    currentQuestion = next();
    message = currentQuestion.question;
    questionInput.value("");
}
//drawing details
function draw() {
    background(185, 166, 247);
    fill("black");
    textSize(14);
    text(wrongAnswer, 100, 450);
    text(message, 100, 300);
    fill(responseColor);
    text(response, 100, 350);
}

