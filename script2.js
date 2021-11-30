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
const cellElements = document.querySelectorAll(".data-cell")
const paragraph = document.getElementsByClassName("box cell");
const boardElement = document.getElementById(".grid")
const winningMessageElement = document.getElementById(".winMessage")
const startButton = document.getElementsByClassName(".startGame")
const winningMessageTextElement = document.getElementById(".winningMessageText")


//part 1 - functions & event listeners for begin game
//purpose: set a call of function to begin the game & add event listeners make interactive for each button
//created function called "beginGame" for starting game, everytime a player wants to  restart the game, the game will restart
//created function called "beginGame" for starting game, everytime a player wants to  restart the game, the game will restart 
//player has to click "begin game button" inorder to start game then they click whether  they want to play as x or o?
function handleClickEvent() {
	alert("You began the game!");
}
const alertBegin = document.querySelectorAll(".startGame");
alertBegin.addEventListener('click', handleClickEvent);
};


//part 2 - when player clicks on the cell, either a X or O should pop up
//create function and event listeners - innerHTML
const changeToX = 



//part 3 - created function & event listeners for clicking on each cell/square
//function "handleClick" was created with a parameter of "event"  to handle mouse click events - this will allow function to be executed
	function handleClickEvent(){
		alert("You clicked a cell!");
	}
	//add target to button
	const alertCell = document.querySelectorAll(".data-cell");
	
	//add event listener
	alertCell.forEach(function(currentCell){
		currentCell.addEventListener('click', handleClickEvent)
	})


    //part 4 - code determines who won game

