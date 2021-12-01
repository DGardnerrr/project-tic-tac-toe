//set up dom nodes
//first variable - target reset game button, added event listeners
//second variable - target all of the boxes within columns, added event listeners
const resetGame = document.getElementById(".resetGame")
const reset = document.getElementby(".")

const boxes = document.querySelectorAll(".cell")
const boxClick = (event) => {
	console.log(event.target.id);
};
boxes.forEach((cell) => cell.addEventListener("click", boxClicked)) 

// part - create variables to store information 
// for clarification: whoever choose to play as O, the computer will generate that person as player 1
//for clarification: whoever choose to play as X, the computer will generate that person as player 2
//purpose: create variables for players so computer can differentiate between the 2 players
//purpose: variable "winOutcomes" used to store possible winning outcomes 
//variable "winOutcomes" will make it more simple for computer to determine who  will  win
const signX = 'X';
const signO = 'O';
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

//player who chooses O will go first
//set currentPlayer variable equal to the letter 0
let currentPlayer = O;

//created function expression
//created event listener for clicking on each box
const boxClicked = (event) => {
	const id = event.target.id

	event.target.innerText = currentPlayer; //when click on each cell/box, it allows text to show up (HTML)

//this code enables game to switch between players
//created the if condition
//assigned currentPlayer to the if condition
currentPlayer = (currentPlayer === O) ? X : O	
  
// //This is also Equivalent to:
// if (currentPlayer === O)
// 	currentPlayer = X 
// 	else {
// 		currentPlayer = O
// 	};

//created variable called board - serve as representation of tic tac toe game
//created a new array of 9 boxes and fill/reserve each space with null
const board = new Array(9).fill(null);

//if statement that checks whether the board is null
//This helps to keep track of our game
//if checkline returns true, then the game ends
if (!board[id]) {
	board[id] = currentPlayer;
	event.target.innerText = currentPlayer;
    if (checkline()) endGame();
	if(!board.some(event) => )
	}
	console.log(board);

//Equivalent to This:
// if (currentPlayer === O)
// currentPlayer = X
// else{
// currentPlayer = O
// 	}
// };

//function determines the results of the end game 
const endGame = (result) => {
intro.innerText = result == "draw" ? "Draw!" : currentPlayer + "has won!";
boxes.forEach((box) => box.removeEventListener("click", boxClicked))
	console.log("game ended");
}

//function allows player to restart the game 
const restartGame = () => {
	currentPlayer = O;
	board.fill(null)
	boxes.forEach((box) => {
    box.innerText = "";
	});

const checkline = () => {
// //winning combination - possible ways player  can win 
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]
// ]


//
//for instance, if statement checks if board[0] is same as board[1]

//Top Line = [0,1,2] X 
if(currentPlayer == board[0] && board[0] == board[1] && board[0] ==board[2]) 
  		return true;

//Middle Line  [3,4,5]
if(currentPlayer == board[0] && board[0] == board[1] && board[0] ==board[2]) 
		return true;

//Bottom Line [6,7,8]
if(currentPlayer == board[0] && board[0] == board[1] && board[0] ==board[2]) 
		return true;

//left column [0,3,6]
if(currentPlayer == board[0] && board[0] == board[1] && board[0] ==board[2]) 
		return true;
//middle column [1,4,7]
if(currentPlayer == board[0] && board[0] == board[1] && board[0] ==board[2]) 
		return  true;
//right column [2,5,8]
if(currentPlayer == board[0] && board[0] == board[1] && board[0] ==board[2]) 
		return true;
//slash diagonal [0,4,8]
if(currentPlayer == board[0] && board[0] == board[1] && board[0] ==board[2]) 
		return true;
//backslash diagonal [2,4,6]
if(currentPlayer == board[0] && board[0] == board[1] && board[0] ==board[2]) 
		return true;
//If none of  these conditions are met, it will return  false
		return false;
};

