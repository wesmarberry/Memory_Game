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
cardImage: "images/queen-of-hearts.png" 	
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png" 	
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png" 	
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png" 	
}
];
var cardsInPlay = [];
//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);
//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);
var checkForMatch = function ()	{
	if(cardsInPlay[0] === cardsInPlay[1])	{
		alert("You Found A Match!");
	} else {
		alert("Sorry, Try Again.");
	}
};

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2)	{
		checkForMatch();
	};
};



flipCard(0);
flipCard(2);