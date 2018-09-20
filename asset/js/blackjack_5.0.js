/*
	BlackJack Game
	by PR
*/

/*
let card1 = 'Aces of Spades',
	card2 = 'Ten of Hearts',
 	yourBets = 50.00;	
*/

let suits = ['Heart', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace','King','Queen','Jack','Ten','Nine','Eight','Seven','Six','Five','Four','Three','Two'];

let deck = [];

for(let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
	for(let valueIdx = 0; valueIdx < values.length; valueIdx++) {
		deck.push( values[valueIdx] + ' of ' + suits[suitIdx] );
	}
}

for(let i = 0; i < deck.length; i++){
	console.log(deck[i]);
}

let playerCards =[ deck[0], deck[2]];

console.log("Welcome to BlackJack!");
console.log("You are deal:");
console.log("  " + playerCards[0]);
console.log("  " + playerCards[1]);
// console.log(yourBets + " " + "Chips");