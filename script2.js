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

const boxClicked = (e) => {
	const id = e.target.id
}

if (!board[id]) {
	board[id] = currentPlayer;
	e.target.innerText = currentPlayer;
    if (checkline(()) endGame());
	if(!board.some(e) => e === null)) endGame("draw"); //checks whether we have any null values

currentPlayer = currentPlayer === O ? X : O
}

console.log(board);
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

boxes.forEach(box) => box.addEventListener("click", boxClicked));
restart.addEventListener("click", restartGame)













