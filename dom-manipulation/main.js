var numClicks = 0;

var $button = document.querySelector('.hot-button');
var $count = document.querySelector('.click-count');

$button.addEventListener('click', function (event) {
  numClicks++;
  $count.textContent = 'Clicks: ' + numClicks;

  if (numClicks < 4) {
    $button.className = 'hot-button cold';
  } else if (numClicks < 7) {
    $button.className = 'hot-button cool';
  } else if (numClicks < 10) {
    $button.className = 'hot-button tepid';
  } else if (numClicks < 13) {
    $button.className = 'hot-button warm';
  } else if (numClicks < 16) {
    $button.className = 'hot-button hot';
  } else {
    $button.className = 'hot-button nuclear';
  }
});
