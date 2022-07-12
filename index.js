
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

//Gets random value of cards
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
}//End function

//Starts the game and intializes the cards
function startGame(){
isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard,secondCard]

sum = firstCard + secondCard
renderGame()//Call function
}//End function

//Main function to play the game and sets the rules
function renderGame(){
//render out firstcard and secondcard

cardEl.textContent = "Cards: "

for(let i = 0; i < cards.length; i++)
{
    cardEl.textContent +=  cards[i] + " "
}//End for

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
}//End if else if
messageEl.textContent = message;
}//End function

//Creates a new card which is added to already drawn cards
function newCard(){
    //console.log("Drawing a new card")
if(isAlive === true && hasBlackjack === false)
{
    let card = getRandomCard()
    sum += card
    cards.push(card)
 
    renderGame()
}else
{
    message = "Sorry, you can't draw more cards!"
}//End If else
messageEl.textContent = message
}//End function