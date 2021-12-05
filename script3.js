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





//if condition for vertical victory conditions



//if condition for diagonal victory conditions 








