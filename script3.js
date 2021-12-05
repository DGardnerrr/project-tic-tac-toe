//DOM selector 
const boxes = document.getElementsByClassName('box')

// step - create variables to store information for game
let X_or_O = 0


//step - create "for loop" for when each player with X or O click on each box 
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



//victory conditions
//created if statement for the possible outcome of victory conditions









