// typing tutor: type each letter and show which character with line and if correct turn green
// if wrong stay there and turn red until correct letter

// query all span elements to make node list
// make for loop for node list or while
// make event listener for current node
// ^^ event handler if event key === letter textcontent then make current letter
// green and put underline to next letter, add increment to go to next node
// turn char into red if wrong letter and error count

// Extra:
// query h1 im pop up, pop up and button
// calculate accuracy and change textContent
// make complete var with boolean starting with false
// if statement when letters run out make last letter green and show popup and button,
// change complete var to stop counting for accuracy
// when button is presses event handler -> location.reload

var $chars = document.querySelectorAll('span');
var $overlay = document.querySelector('.overlay');
var $accuracy = document.querySelector('.play-again h1');
var $playAgain = document.querySelector('.play-again');
var $button = document.querySelector('.play-again button');

var i = 0;
var err = 0;
var complete = false;
$chars[0].className = 'line';

document.addEventListener('keydown', function (event) {
  if (i === $chars.length - 1) {
    $chars[i].className = 'green';
    $accuracy.textContent = 'Accuracy: ' + (($chars.length / (err + $chars.length) * 100).toFixed(0)) + '%';
    $playAgain.className = 'play-again';
    $overlay.className = 'overlay';
    complete = true;
  }

  var letter = $chars[i].textContent;
  if (letter === event.key && complete === false) {
    $chars[i].className = 'green';
    $chars[i + 1].className = 'line';
    i++;
  } else if (letter !== event.key && complete === false) {
    $chars[i].className = 'red line';
    err++;
  }
});

// reset all modified elems in dom -> span classes by looping thru
// remove popup and overlay
// reset i count and error count and complete var
// put line back in beginning

$button.addEventListener('click', function (event) {
  for (var k = 0; k < $chars.length; k++) {
    $chars[k].className = '';
  }
  $playAgain.className = 'play-again display-none';
  $overlay.className = 'overlay display-none';
  i = 0;
  err = 0;
  complete = false;
  $chars[0].className = 'line';
});
