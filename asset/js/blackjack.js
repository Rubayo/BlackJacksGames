/*
	BlackJack Game
	by PR
*/

// Cards variables
let suits = ['Heart', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace','King','Queen','Jack','Ten','Nine','Eight','Seven','Six','Five','Four','Three','Two'];

// DOM variables 
let textArea = document.getElementById('text-area'),
	newGameButton = document.getElementById('new-game-button'),
	hitButton = document.getElementById('hit-button'),
	stayButton = document.getElementById('stay-button');


// Game variables
let gameStarted = false,
	gameOver = false,
	playerWon = false,
	dealerCard = [],
	playerCard = [],
	dealerScore = 0,
	playerScore = 0,
	deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();


newGameButton.addEventListener('click', function(){
	gameStated = true;
	gameOver = false;
	playerWon = false;

	deck = createDeck();
	shuffleDeck(deck);
	dealerCard = [getNewCard(), getNewCard()];
	playerCard = [getNewCard(), getNewCard()];


	newGameButton.style.display = 'none';
	hitButton.style.display = 'inline';
	stayButton.style.display = 'inline';
	showStatus();
});

function createDeck(){
	let deck = [];
	for(let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
		for(let valueIdx = 0; valueIdx < values.length; valueIdx++) {
			let card = {
				suit: suits[suitIdx],
				value: values[valueIdx]
			};
			deck.push(card);
		}
	}
	return deck;	
}
function shuffleDeck(deck){
	for (let i = 0; i < deck.length; i++){
		let swapIdx = Math.trunc(Math.random() * deck.length);
		let tmp = deck[swapIdx];
		deck[swapIdx] = deck[i];
		deck[i] = tmp;

	}
}

function getCardString(card){
	return card.value + ' of ' + card.suit;
}

function showStatus(){
	if(!gameStated){
		textArea.innerText = 'Welcome to BlackJack!';
		return;
	}
}


function getNewCard(){
	return deck.shift();
}

