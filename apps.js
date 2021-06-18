let diceArray = [];

const max = 6;
class Square {
    constructor() {
        this.div = document.createElement("div")
        
    }
    
    updateNumber() {
        let randomNumber = randomVal(1,6);
    }
}
 let divContainer = document.createElement("div")
document.body.appendChild(divContainer);

class Die {
    constructor() {
        this.div = document.createElement("div");
        this.div.classList.add("dice");
        this.value = randomVal(1,6);
        divContainer.appendChild(this.div);
        this.div.addEventListener("click", () => {
            this.roll();
            
            this.div.innerText = this.value;
            diceArray.push(this);
            
        })
    }
    roll() {
        this.div.value = randomVal(1,6);
    }
}
function insertSquare() {
    new Die()
}

function randomVal(min,max) {
return Math.floor(Math.random() * (max-min)) + min;
}


let Squarebutton= document.createElement("Square");
document.body.appendChild(Squarebutton)
Squarebutton.addEventListener("click", insertSquare);

function squareClicked () {
    event.target.Squarebutton = "Square"
}