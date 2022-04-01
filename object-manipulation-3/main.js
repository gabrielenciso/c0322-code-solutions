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
// lodash chunk to chunk cards array into 2 to assign to hand property of players
// loop thru players array
// assign corresponding index of player and cards
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
    for (var j = 0; j < ranks.length; j++) {
      var card = {};
      card[suits[i]] = ranks[j];
      cards.push(card);
    }
  }
  return cards;
}

function shuffle(cards) {
  var shuffled = cards;
  var lastIndex = cards.length - 1;
  while (lastIndex > 0) {
    var randIndex = Math.floor(Math.random() * lastIndex);
    [cards[randIndex], cards[lastIndex]] = [cards[lastIndex], cards[randIndex]];
    lastIndex--;
  }
  return shuffled;
}

function assign() {
  var players = makePlayers();
  var cards = shuffle(cardDeck());

  var chunks = _.chunk(cards, 2);

  for (var i = 0; i < players.length; i++) {
    players[i].hand = chunks[i];
  }

  return players;
}
