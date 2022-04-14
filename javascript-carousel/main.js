var $image = document.querySelector('img');
var $scroll = document.querySelector('.scroll-box');
var $progressDots = document.querySelector('.progress-dots');
var $buttons = document.querySelectorAll('span i');

var images = ['001.png', '004.png', '007.png', '025.png', '039.png'];
var scrollCount = 0;
var intervalId = null;

function handleScroll(event) {
  clearInterval(intervalId);
  if (event.target.tagName !== 'I') {
    return;
  }

  if (event.target.id === 'right-arrow') {
    scrollCount++;
    if (scrollCount > images.length - 1) {
      scrollCount = 0;
    }
    $image.setAttribute('src', 'images/' + images[scrollCount]);

    changeButtonColor(scrollCount.toString());

  } else if (event.target.id === 'left-arrow') {
    scrollCount--;
    if (scrollCount < 0) {
      scrollCount = images.length - 1;
    }
    $image.setAttribute('src', 'images/' + images[scrollCount]);

    changeButtonColor(scrollCount.toString());
  }
  intervalId = setInterval(autoScroll, 3000);
  return scrollCount;
}

function handleProgressDots(event) {
  clearInterval(intervalId);
  if (event.target.tagName !== 'I') {
    return;
  }

  var targetId = event.target.id;

  changeButtonColor(targetId);

  targetId = parseInt(targetId);
  $image.setAttribute('src', 'images/' + images[targetId]);
  scrollCount = targetId;

  intervalId = setInterval(autoScroll, 3000);
  return scrollCount;
}

function changeButtonColor(strId) {
  for (var i = 0; i < $buttons.length; i++) {
    if (strId === $buttons[i].id) {
      $buttons[i].className = 'fa-solid fa-circle-dot highlight';
    } else {
      $buttons[i].className = 'fa-solid fa-circle-dot';
    }
  }
}

function autoScroll() {
  scrollCount++;
  if (scrollCount > images.length - 1) {
    scrollCount = 0;
  }
  $image.setAttribute('src', 'images/' + images[scrollCount]);
  changeButtonColor(scrollCount.toString());
}

$scroll.addEventListener('click', handleScroll);
$progressDots.addEventListener('click', handleProgressDots);
intervalId = setInterval(autoScroll, 3000);
