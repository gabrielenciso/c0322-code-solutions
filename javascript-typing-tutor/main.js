// typing tutor: type each letter and show which character with line and if correct turn green
// if wrong stay there and turn red until correct letter

// query all span elements to make node list
// make for loop for node list or while
// make event listener for current node
// ^^ event handler while event key is not the deisired key form the textcontent then dont pass
// and turn char into red

var $chars = document.querySelectorAll('span');
var i = 0;
// var err = 0;
$chars[0].className = 'line';

document.addEventListener('keydown', function (event) {
  var letter = $chars[i].textContent;
  if (letter === event.key) {
    $chars[i].className = 'green';
    $chars[i + 1].className = 'line';
    i++;
  } else {
    $chars[i].className = 'red line';
    // err++;
  }
});
