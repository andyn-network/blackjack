// Card variables
let firstCard = Math.floor(Math.random() * 11) + 1;  // Generates a random number between 1 and 11 (inclusive) and stores it in firstCard.
let secondCard = Math.floor(Math.random() * 11) + 1; // Generates a random number between 1 and 11 (inclusive) and stores it in secondCard.
let cards = [firstCard, secondCard]; // Creates an array 'cards' containing the values of firstCard and secondCard.
let sum = firstCard + secondCard; // Calculates the sum of firstCard and secondCard and stores it in sum.
let isAlive = true; // A boolean variable to track whether the player is still in the game (true) or not (false).
let hasBlackJack = false; // A boolean variable to track if the player has a blackjack (true) or not (false).
let message = ""; // An empty string variable to store messages related to the game's status.

// DOM variables
let cardsEl = document.getElementById("cardsEl"); // Gets the element with the ID "cardsEl" from the DOM and stores it in the variable cardsEl.
let sumEl = document.getElementById("sumEl"); // Gets the element with the ID "sumEl" from the DOM and stores it in the variable sumEl.
let messageEl = document.getElementById("messageEl"); // Gets the element with the ID "messageEl" from the DOM and stores it in the variable messageEl.

const playGameEl = document.getElementById("playGame"); // Gets the element with the ID "playGame" from the DOM and stores it in the constant playGameEl.
const drawCardEl = document.getElementById("drawCard"); // Gets the element with the ID "drawCard" from the DOM and stores it in the constant drawCardEl.
const newGameEl = document.getElementById("newGame"); // Gets the element with the ID "newGame" from the DOM and stores it in the constant newGameEl.

// Functions
drawCardEl.disabled = true; // Disables the "drawCardEl" button initially.
newGameEl.disabled = true; // Disables the "newGameEl" button initially.
messageEl.textContent = "Click Play to Begin!"; // Sets the initial text content of "messageEl" to "Click Play to Begin!".

// Event listener for the "playGameEl" button
playGameEl.addEventListener("click", renderGame); // Attaches an event listener to the "playGameEl" button that calls the "renderGame" function when clicked.

// The "renderGame" function
function renderGame() {
    cardsEl.textContent = "Cards: "; // Sets the "cardsEl" text content to "Cards: ".
    for (let i = 0; i < cards.length; i++) { // Loops through the "cards" array and appends each card value to the "cardsEl" text content.
        cardsEl.textContent += cards[i] + " ";
        playGameEl.disabled = true; // Disables the "playGameEl" button during the game.
    }

    sumEl.textContent = "Sum: " + sum; // Sets the "sumEl" text content to display the current sum.

    // Checks the game status and updates the "message" variable accordingly.
    if (sum < 21) {
        message = "Do you wish to draw another card?";
        drawCardEl.disabled = false; // Enables the "drawCardEl" button if the sum is less than 21.
        newGameEl.disabled = false; // Enables the "newGameEl" button if the sum is less than 21.
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true; // Sets "hasBlackJack" to true if the sum is equal to 21 (Blackjack).
        drawCardEl.disabled = true; // Disables the "drawCardEl" button if the player has Blackjack.
        newGameEl.disabled = false; // Enables the "newGameEl" button if the player has Blackjack.
    } else {
        message = "You lose!";
        isAlive = false; // Sets "isAlive" to false if the sum exceeds 21 (player loses).
        drawCardEl.disabled = true; // Disables the "drawCardEl" button if the player loses.
    }

    messageEl.textContent = message; // Sets the "messageEl" text content to display the appropriate message.
    newGameEl.disabled = false; // Enables the "newGameEl" button at the end of the game.
}

// Event listener for the "drawCardEl" button
drawCardEl.addEventListener("click", function newcard() {
    let newCard = Math.floor(Math.random() * 11) + 1; // Generates a random number between 1 and 11 (inclusive) and stores it in newCard.
    sum += newCard; // Adds the newCard value to the existing sum.
    cards.push(newCard); // Adds the newCard value to the "cards" array.
    renderGame(); // Calls the "renderGame" function to update the game state after drawing a new card.
});

// Event listener for the "newGameEl" button
newGameEl.addEventListener("click", function newGame() {
    window.location.reload(); // Reloads the page to start a new game when the "newGameEl" button is clicked.
});
