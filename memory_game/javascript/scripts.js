//Scroll function

 $(document).ready(function(){
    $( "a.navitem" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).position().top }, 500);
    });
});

 console.log("Up and running!");



var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
cardBack: "images/back.png"	
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
cardBack: "images/back.png"	
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
cardBack: "images/back.png"		
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
cardBack: "images/back.png"		
}
];
var cardsInPlay = [];
//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);
//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);
var scoreCount = 0;
var checkForMatch = function ()	{
	if(cardsInPlay[0] === cardsInPlay[1])	{
		alert("You Found A Match!");
		scoreCount = scoreCount + 1;
		var oldSpan = document.createElement("span");
		oldSpan.id = "childSpan";
		var oldSpan_content = document.createTextNode(scoreCount);
		oldSpan.appendChild(oldSpan_content);
		var newSpan = document.getElementById("childSpan");
		var parentDiv = newSpan.parentNode;
		parentDiv.replaceChild(oldSpan, newSpan);
	} else {
		alert("Sorry, Try Again.");
	}
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	//console.log("User flipped " + cards[cardId].rank);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2)	{
		checkForMatch();
	};
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}





var createBoard = function ()	{
	for (var i = 0; i < cards.length; i++)	{
		var randomArray = [0, 1, 2, 3];
		randomArray = shuffle(randomArray);
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',randomArray[i]);
		cardElement.setAttribute('id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

var resetBoard = function ()	{
		var removeCards = document.getElementById('game-board');
		removeCards.innerHTML = '';
		createBoard();
		cardsInPlay = [];
};

createBoard();
document.querySelector('.reset').addEventListener('click', resetBoard)
