/* FUTURE FUNCTIONALITY IDEAS
1. allow users to choose how many cards they want to play with
2. randomize cards
3. fix game so a card can't be clicked twice and therefore match itself */

// define variables and arrays
var gameBoard = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// create a board with the number and type of cards provided in the cards array
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		gameBoard.appendChild(newCard);
	};
}

// create the board
createBoard();

// clear image function
var clearImage = function() {
	var allCards = document.getElementsByClassName('card');
	for (var i = 0; i < allCards.length; i++) {
		allCards[i].innerHTML = '';
	};
}

// test if two cards in play are a match
var isMatch = function(typeOne, typeTwo) {
	if (typeOne == typeTwo) {
		setTimeout(function(){ alert("You found a match!"); clearImage()}, 300);
	} else {
		setTimeout(function(){ alert("Sorry, try again."); clearImage()}, 300);
	};
}

// check if two cards are in play
var isTwoCards = function() {
	// add card to array of cards in play
	cardsInPlay.push(this.getAttribute('data-card'));
	// if you have two cards in play, check for a match
	if (cardsInPlay.length == 2) {
		// pass the cardsInPlay as an argument to the isMatch function.
		// couldnt get isMatch(cardsInPlay) to work (was passing through as undefined) so had to define specific elements
		isMatch(cardsInPlay[0], cardsInPlay[1]);
		// clear cards in play array for next try
		cardsInPlay = [];
	};
}

// add image to card
var addImage = function() {
	if (this.getAttribute('data-card') == 'queen') {
		// innerHTML point to queen image
		this.innerHTML = '<img src="queen.png" alt="Queen of Diamonds"/>';
	} else {
		// inner HTML point to king image
		this.innerHTML = '<img src="king.png" alt="King of Spades" />';
	};
}


// define list of objects we want to assign click event to
var totCards = document.getElementsByClassName('card');

// define event handler
for (var i = 0; i < totCards.length; i++) {
	totCards[i].addEventListener('click', addImage);
	totCards[i].addEventListener('click', isTwoCards);
};