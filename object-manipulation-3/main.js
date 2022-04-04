console.log('Lodash is loaded:', typeof _ !== 'undefined');

// function to make players
// run prompt in console to make players
// make empty players array
// push empty arrays with num players;
// loop thru players array --> make prompt asking name then make key value pair for name prop and value
// make hand prop and null value

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

// function for dealing cards to players
// lodash chunk to chunk cards array into 2 to assign to hand property of players
// loop thru players array
// assign corresponding index of player and cards

// score player hands
// loop thru players with hands
// loop thru current player hand
// make score var
// conditionals for values A, face cards, and reg number values
// make score property in player and assign score
// return players

// get winner
// loop through players and get scores
// sort thru scores and get largest value at end index
// for loop through players and check score value and see if equal to largest value
// store to a winners array
// if winners array is > 1 then we run tie breaker with winners array
// if not then return winner

// for tie breaker
// deal cards again to players that tied
// score player hands
// then call play function again

function makePlayers() {
  var numPlayers = parseInt(prompt('How many players?'));
  var players = [];
  for (var j = 0; j < numPlayers; j++) {
    players.push({});
  }

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

function dealCards(players) {
  var cards = shuffle(cardDeck());

  var numCardPerHand = parseInt(prompt('How Many Cards Per Hand?'));
  var chunks = _.chunk(cards, numCardPerHand);

  for (var i = 0; i < players.length; i++) {
    players[i].hand = chunks[i];
  }

  return players;
}

function score(playersWithCards) {
  var players = playersWithCards;
  for (var i = 0; i < players.length; i++) {
    var hand = players[i].hand;
    var score = 0;
    for (var j = 0; j < hand.length; j++) {
      for (var key in hand[j]) {
        if (hand[j][key] === 'A') {
          score += 11;
        } else if (hand[j][key] === 'J' || hand[j][key] === 'Q' || hand[j][key] === 'K') {
          score += 10;
        } else {
          score += hand[j][key];
        }
      }
      players[i].score = score;
    }
  }
  return players;
}

function play(playersWithScore) {
  var scores = [];
  var winners = [];
  for (var i = 0; i < playersWithScore.length; i++) {
    scores.push(playersWithScore[i].score);
    playersWithScore[i].winner = false;
  }
  scores.sort();
  var highestScore = scores[scores.length - 1];
  for (var j = 0; j < playersWithScore.length; j++) {
    if (playersWithScore[j].score === highestScore) {
      winners.push(playersWithScore[j]);
      playersWithScore[j].winner = true;
    }
  }

  if (winners.length > 1) {
    console.log('tie: ', winners);
    tieBreaker(winners);
  } else {
    console.log('winner: ', winners[0]);
    return winners[0];
  }
}

// Optional #7
// function play2(players, numCards) {
//   var playersList = players;
//   var handNum = numCards;
//   var cards = shuffle(cardDeck());

//   var chunks = _.chunk(cards, handNum);

//   for (var i = 0; i < playersList.length; i++) {
//     playersList[i].hand = chunks[i];
//   }

//   var playersScored = score(playersList);
//   var winner = play(playersScored);
//   return winner;
// }

// Optional #8
function tieBreaker(players) {
  prompt('There is a tie! Press ok to continue');
  var dealPlayers = dealCards(players);
  var scorePlayers = score(dealPlayers);
  return play(scorePlayers);
}

var players = makePlayers();
var dealPlayers = dealCards(players);
var scorePlayers = score(dealPlayers);
play(scorePlayers);
