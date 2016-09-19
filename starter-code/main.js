var gameBoard = document.getElementById('game-board');
var maxCards = 4;
var createBoard = function() {
	for (var i = 1; i <=maxCards; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	};
}

createBoard();

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* if (cardTwo === cardFour) {
	alert("You found a match!");
} else if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} */

/* TO DO
allow users to choose how many cards they want to play with greater than 1 */