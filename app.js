// Card variables
let firstCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;
let message = "";

// DOM variables
let cardsEl = document.getElementById("cardsEl");
let sumEl = document.getElementById("sumEl");
let messageEl = document.getElementById("messageEl");

const playGameEl = document.getElementById("playGame");
const drawCardEl = document.getElementById("drawCard");
const newGameEl = document.getElementById("newGame");

// Functions
drawCardEl.disabled = true;
newGameEl.disabled = true;
messageEl.textContent = "Click Play to Begin!";

playGameEl.addEventListener("click", renderGame);
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
        playGameEl.disabled = true;
    }

sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you wish to draw another card?";
        drawCardEl.disabled = false;
        newGameEl.disabled = false;
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        drawCardEl.disabled = true;
        newGameEl.disabled = false;
    } else {
        message = "You lose!";
        isAlive = false;
        drawCardEl.disabled = true;
    }
    messageEl.textContent = message;
    newGameEl.disabled = false;
}


drawCardEl.addEventListener("click", function newcard() {
    let newCard = Math.floor(Math.random() * 11) +1;
    sum += newCard;
    cards.push(newCard);
    renderGame();
});


newGameEl.addEventListener("click", function newGame() {
    window.location.reload();
});

