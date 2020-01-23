const cards = [  
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];
let cardsInPlay = [];
let score = 0;

//let cardOne = cards[0];
//let cardTwo = cards[2];

//cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);
function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', String(i));
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			alert('You have found a match!');
			score += 1;
			cardsInPlay.pop();
			cardsInPlay.pop();
		}
		else if (cardsInPlay[0].rank !== cardsInPlay[1].rank) {
			alert('Sorry, please try again!');
			cardsInPlay.pop();
			cardsInPlay.pop();
		} else {
			//nothing should happen if there are no two cards in the array
		}	
	}
}

function flipCard () {
	cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID]);
	console.log('user flipped ' + cards[cardID].rank + ' of ' + cards[cardID].suit + '.');
	this.setAttribute('src', cards[cardID].cardImage);
	checkForMatch();
}

createBoard();