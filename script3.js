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
//created function with if statement for the possible outcome of victory conditions



//across victory conditions 




//vertical victory conditions



//diagonal victory conditions 








