//Scroll function

 $(document).ready(function(){
    $( "a.navitem" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).position().top }, 500);
    });
});

 console.log("Up and running!");



var cards = ["queen", "queen", "king","king"];
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
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2)	{
		checkForMatch();
	};
};



flipCard(0);
flipCard(2);