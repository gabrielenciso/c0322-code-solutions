console.log('Lodash is loaded:', typeof _ !== 'undefined');

// function to make players
// run prompt in console to make players

// function to make card deck
// make array with ranks
// make array with suits
// loop thru and assign to empty obj and pushing obj to list
// make hand property null?

// fisher-yates func to shuffle
// get last index of array with length - 1
// while last index is greater than 0
// take random index from ordered array with Math.floor(Math.random() * array.length)
// get current last index value
// make the last index of the array = array of the random index
// and assign random index to temp
// and increment last index -1

// function for dealing cards to players with player objects and card deck obj parameter & find high score
// loop thru players array
// random value to card array and remove it from array of cards x2
//
// find high score
// loop thru players and add up their values
// whoever is highest store to current highest
// if statement if whover being compared is higher score then change value
// return name of person

function makePlayers() {
  var players = [
    {},
    {},
    {},
    {}
  ];
  var name = '';
  for (var i = 0; i < players.length; i++) {
    name = prompt('Player ' + (i + 1) + ' Name: ');
    players[i].name = name;
    players[i].hand = null;
  }
  return players;
}

function cardDeck() {
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  var cards = [];
  for (var i = 0; i < suits.length; i++) {
    var card = {};
    for (var j = 0; j < ranks.length; j++) {
      card[suits[i]] = ranks[j];
      cards.push(card);
    }
  }
  return cards;
}
