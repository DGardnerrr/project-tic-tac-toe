//set up dom nodes
//first variable - target begin game button
//second variable - target all of the boxes within columns
const beginGame = document.getElementById(".beginGame")
const boxes = document.querySelectorAll(".box")

// part - create variables to store information 
// for clarification: whoever choose to play as X, the computer will generate that person as player A
//for clarification: whoever choose to play as cirle, the computer will generate that person as player B
//purpose: create variables for players so computer can differentiate between the 2 players
//purpose: variable "winOutcomes" used to store possible winning outcomes 
//variable "winOutcomes" will make it more simple for computer to determine who  will  win
const playerX = 'X';
const playerO = 'O';
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
//set currentPlayer variable equal to O
let currentPlayer = O;

//created function expression
//created event listener for clicking on each box
const boxClicked = (event) => {
	const id = event.target.id

	event.target.innerText = currentPlayer; //when click on each cell/box, it allows text to show up

	boxes.forEach((box) => box.addEventListener("click", boxClicked))


//created variable called board - serve as representation of tic tac toe game
//
const board = new Array(9).fill(null);

//
if (!board[id]) {
	board[id] = currentPlayer;
	event.target.innerText = currentPlayer;
    if (checkline(()) )endGame());    //error fixed
	if(!board.some(event) => event === null)) endGame("draw"); //checks whether we have any null values
	console.log(board);
//
if (currentPlayer === O)
currentPlayer = X
else{
currentPlayer = O
	}
};

//determines who won the game 
const endGame = (result) => {
intro.innerText = result == "draw" ? "Draw!" : currentPlayer + "has won!";
boxes.forEach((box) => box.removeEventListener("click", boxClicked))
	console.log("game ended");
}


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


//check if board[0] is same as board[1]

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














