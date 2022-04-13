var intervalID;

var $countDown = document.querySelector('.countdown-display');
var count = $countDown.textContent;

function changeText() {
  count = parseInt(count);
  if (count > 0) {
    $countDown.textContent = count;
  } else {
    $countDown.textContent = '~Earth Beeeellooowww Us~';
    clearInterval(intervalID);
  }
  count--;
}

function countdown() {
  if (!intervalID) {
    intervalID = setInterval(changeText, 1000);
  }
}

countdown();
