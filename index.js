
let cards = [];//cards array - ordered list of array
let sum = 0
let hasBlackjack = false;
let isAlive = false;
let message = "";

//Objects. key:value
let player = {
    name: "Gurpreet", chips:145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

function getRandomCard(){
    
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    
    if(randomNumber > 10)
    {
        return 10
    } else if(randomNumber === 1)
    {
        return 11
    }
    else{
        return randomNumber
    }
}


function startGame(){
isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard,secondCard]
sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
//render out firstcard and secondcard

cardEl.textContent = "Cards: "

for(let i = 0; i < cards.length; i++)
{
    cardEl.textContent +=  cards[i] + " "
}

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20)
    {
        message = "Do you want to draw another card?";
        
    }
    else if( sum === 21)
    { 
        message = "You've won!"
        hasBlackjack = true;
    }
    else
    {
        message = "Sorry, you've lost the game"
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard(){
    //console.log("Drawing a new card")
    if(isAlive === true && hasBlackjack === false)
{
    let card = getRandomCard()
    sum += card
    cards.push(card)
 
    renderGame()
}else{
    message = "Sorry, you can't draw more cards!"
}
messageEl.textContent = message
   
}



// console.log(isAlive);

// console.log(4 === 3)//false
// console.log(5 > 2)//true
// console.log(12>12)//false
// console.log(3 < 0)//false
// console.log(3 >= 3)//true
// console.log(11 <= 11)//true
// console.log(3 <= 2)//false





// let age = 21;

// if(age <= 20)
// {
//     console.log("You can not enter the club")
// }
// else{
//     console.log(" Welcome!")
// }

// let age = 101

// if(age < 100)
// {
//     console.log("not eligible")

// }else if(age === 100){
// console.log("here is yout card from the King")
// }
// else{
//     console.log("not eligible, you have already gotten the one")
// }