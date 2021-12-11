//step - DOM selector
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
            boxes[i].classList.add("holdValues"); 
        }
        else {
            this.innerHTML='O'
            winner()
            X_or_O+=1
            boxes[i].classList.add("holdValues"); 
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
//if box1, box4,and box7 are equal to eachother, there is a win 
if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
    selectWinnerBoxes(box1,box4,box7);
    selectNonWinnerBoxes(box2,box3,box5,box6, box8,box9);
}
//the boxes selected vertically to win the game are box2, box5, box8
//if box2, box5,and box8 are equal to eachother, there is a win 
if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
    selectWinnerBoxes(box2,box5,box8);
    selectNonWinnerBoxes(box1,box3,box4,box6,box7,box9);
}
//the boxes selected vertically to win the game are box3, box6, box9
//if box3, box6,and box9 are equal to eachother, there is a win 
if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box3,box6,box9);
    selectNonWinnerBoxes(box1,box2,box4,box5,box7,box8);
}
//if condition for diagonal victory 
//the boxes selected diagonally to win game are box1,box5,box9
//if box1, box5,and box9 are equal to eachother, there is a win 
if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
    selectWinnerBoxes(box1,box5,box9);
    selectNonWinnerBoxes(box2,box3,box4,box6,box7,box8);
}
//the boxes selected diagnally to win are box3, box5, box7
if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
    selectWinnerBoxes(box3,box5,box7);
    selectNonWinnerBoxes(box1,box2,box4,box6,box8,box9);
}
 //created condition for the tie
if (box1.innerHTML !== "" && 
    box2.innerHTML !== "" && 
    box3.innerHTML !== "" && 
    box4.innerHTML !==""  &&
    box5.innerHTML !==""  &&
    box6.innerHTML !==""  &&
    box7.innerHTML !==""  &&
    box8.innerHTML !==""  &&
    box9.innerHTML !=="" ) {

selectTieBoxes(box1,box2,box3,box4,box5,box6,box7,box8,box9);
}
}

/*
 * step - Visually display which side won if a player gets
 *  three in a row, or show a draw if neither player wins
 */
//to do that, created function for winning game 
// when the user clicks on the button, the new class get added with  the existing classes.
//created function to reset the game - when the button is clicked, the game is reset

function selectWinnerBoxes(v1, v2, v3) {
    v1.classList.add('win')
    v2.classList.add('win')
    v3.classList.add('win')
    turn.innerHTML = `${v1.innerHTML} Won. Congrats!`
}

function selectNonWinnerBoxes (v4, v5, v6, v7, v8, v9) {
    v4.classList.add('loss')
    v5.classList.add('loss')
    v6.classList.add('loss')
    v7.classList.add('loss')
    v8.classList.add('loss')
    v9.classList.add('loss')

}

function selectTieBoxes(v1,v2,v3, v4, v5, v6, v7, v8, v9) {
    v1.classList.add('tie')
    v2.classList.add('tie')
    v3.classList.add('tie')
    v4.classList.add('tie')
    v5.classList.add('tie')
    v6.classList.add('tie')
    v7.classList.add('tie')
    v8.classList.add('tie')
    v9.classList.add('tie')
    turn.innerHTML = `${v1.innerHTML} There was a tie!`
}


function replay() {
    for(let i=0; i<boxes.length; i++) {
        boxes[i].classList.remove('win')
        boxes[i].classList.remove('loss')
        boxes[i].classList.remove('tie')
        boxes[i].innerHTML = ''
        boxes[i].classList.remove("holdValues"); 
        X_or_O = 0
        turn.innerHTML = 'Play'
    }
}