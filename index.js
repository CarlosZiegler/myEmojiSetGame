let gameOn = new Game (cards)
// console.log(cards);
// console.log(gameOn.cards);
gameOn.shuffleCards ();
gameOn.pick12Cards();
gameOn.renderCards(gameOn.displayedCards);
document.querySelectorAll(".emoji").forEach(function (image){image.addEventListener('click', function(event){
    gameOn.selectCard(event,gameOn)
} )})
gameOn.selectCard()
// gameOn.renderCards(cards);
// // console.log(gameOn.cards);
// console.log(gameOn.displayedCards);
// gameOn.checkIfSet(gameOn.selectedCards)
// console.log(gameOn.selectedCards)
// console.log(gameOn.checkIfSet(gameOn.selectedCards))


//   displayed cards is an array using pop to remove card from deck