//part - create variables to store information 
//for clarification: whoever choose to play as X, the computer will generate that person as player A
//for clarification: whoever choose to play as cirle, the computer will generate that person as player B
//purpose: create variables for players so computer can differentiate between the 2 players
//purpose: variable "winOutcomes" used to store possible winning outcomes 
//variable "winOutcomes" will make it more simple for computer to determine who  will  win

const playerA = 'x';
const playerB= 'circle';
const winOutcomes = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

//part 
//set up DOM
//this will play a important role with event listeners 
//purpose of this: use id tags from index html & save values of all game elements
const paragraph = document.getElementsByClassName(".box cell");
const winningMessageElement = document.getElementById(".winMessage")
const startButton = document.getElementById(".beginGame")
const winningMessageTextElement = document.getElementById(".winningMessageText")

//step 1 
//function that allows player to start game 
function startGame(name) {
    console.log("Hello you started the game" + name);
};
//added event listener for "begin game button"
//const beginGame = document.getElementById(".beginGame")

function handleClick() {
	alert("The game has started!");
}

//when player clicks on the cell, either a X or O should pop up
//event listener for box
//step 1- add target to button
//step 2 -for loop - loop over all of cells 
//add event listeners, so when you click a box


 const alertCell = document.getElementById(".box cell")
 alertCell.addEventListener('click', event => {
    alert("You clicked a button!")
 })
 for (let i = 0; i < alertCell.length; i++) {
 console.log(i);
 }

// switch turns between 2 players




// code determines who won game
// Create a function that checks if either player has won

// function pickWinner() {
// log("")
// }
