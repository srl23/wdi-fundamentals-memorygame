const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let score = 0;

//let cardOne = cards[0];
//let cardTwo = cards[2];

//cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You have found a match!');
			score += 1;
			cardsInPlay.pop();
			cardsInPlay.pop();
		}
		else if (cardsInPlay[0] !== cardsInPlay[1]) {
			alert('Sorry, please try again!');
			cardsInPlay.pop();
			cardsInPlay.pop();
		} else {
			//nothing should happen if there are no two cards in the array
		}	
	}
}

function flipCard (cardID) {
	cardsInPlay.push(cards[cardID]);
	console.log('user flipped ' + cards[cardID] + '.');
	checkForMatch();
}