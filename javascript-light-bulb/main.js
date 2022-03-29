// turn light bulb on and off

// query div.button and body
// make var toggle set equal to 1 for on
// make a event listener click
// event handle: make if statement replace var num 1 or 0 for on and off
// change className to add colors of body and div then change toggle val

var $circle = document.querySelector('.circle');
var $body = document.querySelector('body');
var toggle = true;

$circle.addEventListener('click', function (event) {
  if (toggle === true) {
    $circle.className = 'circle yellow-button';
    $body.className = 'beige';
    toggle = false;
  } else {
    $circle.className = 'circle grey-button';
    $body.className = 'black';
    toggle = true;
  }
});
