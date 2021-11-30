//create variables
//purpose: create variables for players so computer can differentiate between the 2 players
//purpose: variable "winOutcomes" used to store possible winning outcomes 
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

//set up dom nodes
//purpose of this: use id tags from index html & save values of all game elements
//created a variable &  set player C to false- ensure other player B can make a move first
const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('grid')
const winningMessageElement = document.getElementById('winMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningMessageText')

let playerB = false



// function that enables game to switch between the 2 players
// function that marks 2 players in cell or place mark when playing game -
function swapTurns() {
    playerBturn != playerAturn
  }
  
  function markPlace(cell, currentTurn) {
    cell.classlist.add(currentTurn)
  }


//part - created function & event listeners for clicking on each cell/square
//function "handleClick" was created with a parameter of "event"  to handle mouse click events - this will allow function to be executed
//variable "currentTurn" determines who turn it currently is between player 1 and 2 
/*if statement checks if one of players has already won by comparing win combinations 
* if current move/turn the player makes, 
*
* 
* "currentTurns" - determines which player turn it currently is?
*/ 








//part - functions & event listeners
//purpose: set a call of function to begin the game & add event listeners make interactive for each button
//created function called "beginGame" for starting game, everytime a player wants to  restart the game, the game will restart
//created function called "beginGame" for starting game, everytime a player wants to  restart the game, the game will restart 
//player has to click "restart" inorder to start game then they click whether  they want to play as x or o?

	
	
//part -
//function shows who won the game or if there is a tie - shows the 
// results from  the game 