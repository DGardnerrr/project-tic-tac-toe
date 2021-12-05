//DOM selector 
const boxes = document.getElementsByClassName('box')

// step - create variables to store information for game
let X_or_O = 0


//step - create "for loop" if else statement for when each player with X or O click on each box 
//innerHTML - allows text of X or 0 to show up in the box when boxed is clicked
for(let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function() {
        if(X_or_O % 2 === 0) {
            this.innerHTML='X'
            winner()
            X_or_O+=1
        }
        else {
            this.innerHTML='O'
            winner()
            X_or_O+=1
        }
    }
}


//step - victory conditions
//created function with if condition for the possible outcome of victory conditions

//if condition for across victory conditions 
//if box1, box2,and box3 are equal to eachother, there is a win 
//the boxes selected across to win the game are box1, box2, box3 
function winner() {
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
        selectWinnerBoxes(box1, box2, box3);
        selectNonWinnerBoxes(box4,box5,box6,box7,box8,box9);
    }
    //if box4, box5,and box6 are equal to eachother, there is a win 
//the boxes selected across to win the game are box4, box5, box6 
    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
        selectWinnerBoxes(box4,box5,box6);
        selectNonWinnerBoxes(box1,box2,box3,box7,box8,box9);
    }
    //if box7, box8,and box9 are equal to eachother, there is a win 
//the boxes selected across to win the game are box7, box8, box9
    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
        selectWinnerBoxes(box7,box8,box9);
        selectNonWinnerBoxes(box1,box2,box3,box4,box5,box6);
    }
//if condition for vertical victory conditions
//the boxes selected vertically to win the game are box1, box4, box7
if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
    selectWinnerBoxes(box1,box4,box7);
    selectNonWinnerBoxes(box2,box3,box5,box6, box8,box9);
}
//the boxes selected vertically to win the game are box2, box5, box8
if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
    selectWinnerBoxes(box2,box5,box8);
    selectNonWinnerBoxes(box1,box3,box4,box6,box7,box9);
}
//the boxes selected vertically to win the game are box3, box6, box9
if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box3,box6,box9);
    selectNonWinnerBoxes(box1,box2,box4,box5,box7,box8);
}
//if condition for diagonal victory 
//the boxes selected diagonally to win game are box1,box5,box9
if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box1,box5,box9);
    selectNonWinnerBoxes(box2,box3,box4,box6,box7,box8);
}
//the boxes selected diagnally to win are box3, box5, box7
if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
    selectWinnerBoxes(box3,box5,box7);
    selectNonWinnerBoxes(box1,box2,box4,box6,box8,box9);
}
    
}

//




