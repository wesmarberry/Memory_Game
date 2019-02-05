//Scroll function

 $(document).ready(function(){
    $( "a.navitem" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).position().top }, 500);
    });
});

 console.log("Up and running!");

 var cardOne = 'King';
 var cardTwo = 'Queen';
 var cardThree = 'King';
 var cardFour = 'Queen';

 console.log("User flipped " + cardOne);
  console.log("User flipped " + cardTwo);
