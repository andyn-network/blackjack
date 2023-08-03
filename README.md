# blackjack
 A simple blackjack game made from vanilla HTML, CSS and Javascript.

Before starting this project, I've only had around 1 month of HTML and CSS knowledge and 2 weeks of Javascript experience. This project was mainly to build up my core fundamentals of coding. I'm happy that I was able to complete it within a day, even though I still had to look up how `addEventlistener()` worked and other basic syntaxes that manipulated the DOM. I haven't properly learned the basics of DOM yet, but I look forward to understanding how it works in the future as it is definetly one of the fields that interest me the most. 

I plan on revisitng this project sometime in the future, to maybe refactor the code or add some win/lose point system into the game. I also want to add more blackjack features such as betting, splitting and folding against the computer. I also want to learn how to manipulate images with javascript making the game visually more appearing with animations of cards and chips on the table.

## How to Play
This JavaScript code sets up a basic Blackjack game with HTML elements for displaying cards and game information. The game flow is as follows:
1. When the player clicks the "Play" button, two random cards are generated and displayed on the screen. The player's current hand sum is calculated based on these two cards.
2. Depending on the sum of the player's hand, different messages and options are presented to the player:
   - `If (sum < 21)`, the player is prompted with the message `"Do you wish to draw another card?"` and given the option to click the "Draw Card" button or start a new game with the "New Game" button.
   - `Else if (sum === 21)`, the player is notified with the message `"You've got Blackjack!"` and the "Draw Card" button is disabled. They can still start a new game with the "New Game" button.
   - `Else` if the sum exceeds 21, the player loses, and a message `"You lose!"` is displayed. The "Draw Card" button is disabled.
3. During the game, the "Play" button is disabled to prevent starting multiple games simultaneously.
4. The game continuously updates the DOM elements to display the current cards, sum, and messages appropriately based on the player's actions.
5. When the player clicks the "Draw Card" button, a new random card is generated, and the player's sum is updated accordingly. The new card is added to the hand, and the game state is re-rendered with the updated information.
6. When the player clicks the "New Game" button, the page is reloaded, effectively resetting the game to its initial state, allowing the player to start a fresh game.

 In summary, this code creates a simple yet interactive Blackjack experience on the web page, offering users the opportunity to play a game of Blackjack with a straightforward user interface.
