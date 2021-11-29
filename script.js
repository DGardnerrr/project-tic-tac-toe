//create variables
//purpose: create variables for players so computer can differentiate between the 2 players
//purpose: variable "winOutcomes" used to store possible winning outcomes 
const player1 = 'x';
const player2 = 'circle';
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
const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('grid')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningMessageText')

let player2 = false

//functions & event listeners
//purpose: set a call of function to begin the game & add event listeners 
//make interactive for each button
//created function for starting game, everytime a player wants to  restart the game, the game will restart