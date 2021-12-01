// //part - create variables to store information 
// //for clarification: whoever choose to play as X, the computer will generate that person as player A
// //for clarification: whoever choose to play as cirle, the computer will generate that person as player B
// //purpose: create variables for players so computer can differentiate between the 2 players
// //purpose: variable "winOutcomes" used to store possible winning outcomes 
// //variable "winOutcomes" will make it more simple for computer to determine who  will  win
const x = 'X';
const o = 'O';

let currentPlayer = 'o';

const board = new Array(9).fill(null);

const boxClicked = (e) {
	const id = e.target.id
}

if (!board[id]) {
	board[id] = currentPlayer;
	e.target.innerText = currentPlayer;
    checkline();
currentPlayer = currentPlayer === O ? X : O
}

console.log(board);
};

const checkline = () => {
// //winning combination
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]
// ]

//Top Line = [0,1,2] X 
if(currentPlayer == board[0] && board[0] == board[1] && board[0] ==board[2])
console.log("top line winner");



};









//step 1 
//function that allows player to start game 
const boxes = document.querySelectorAll(".box cell")

boxes.forEach((box) => box.addEventListener("click", boxClicked))






 
//part 
//set up DOM
//this will play a important role with event listeners 
//purpose of this: use id tags from index html & save values of all game elements
// const cell = document.getElementsByClassName("box cell");
// const winningMessageElement = document.getElementById(".winMessage")
// const startButton = document.getElementById(".beginGame")
// const winningMessageTextElement = document.getElementById(".winningMessageText")

//step 1 
//function that allows player to start game 
const startGame() {
var id1 = document.querySelector(#td1)

}

//when player clicks on the cell, either a X or O should pop up
//event listener for box
//step 1- add target to button
//step 2 -for loop - loop over all of cells 
//add event listeners, so when you click a box

//  const alertCell = document.getElementById(".box cell")
//  alertCell.addEventListener('click', event => {
//     alert("You clicked a button!")
//  })
//  for (let i = 0; i < alertCell.length; i++) {
//  console.log(i);
//  }

// const cell = () => Array.from(document.getElementsByClassName("box cell"));
// const clickFunction = (event) => console.log(event.target);
// const emptyCells = () => grid().filter(_cell1 => _cell1.innerText === '')
// const handleClickEvent = () => cell().forEach(_cell1 => _cell1.addEventListener("click", clickFunction))
// const allSame = (arr) => arr.every

// clickFunction();


// // switch turns between 2 players
// //
// const takeTurn = (index, letter) => grid()[index].innerText = letter;
// const opponentChoice = () => qNumId(emptyCells()[Math.floor(Math.random() * emptyCells().length)]);



// // code determines who won game
// // Create a function that checks if either player has won
// const pickWinner = (winningSequence) => { 
//     winningSequence.forEach(_qEl => _qEl.classList.add('winner'));
//     disableListeners();




