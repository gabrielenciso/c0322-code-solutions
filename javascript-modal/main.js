// if button is clicked a pop up window appears with grey overlay over it

// query landing button, curtain, overlay, pop-up div
// add click event to landing button
// ^^ event handle when clicked change z index of querys
// add click event to pop up button
// ^^ event handle when clicked pop up button change z index of querys

var $landingButton = document.querySelector('.landing-button');
var $overlay = document.querySelector('.overlay');
var $popUp = document.querySelector('.pop-up');
var $popUpButton = document.querySelector('.pop-up button');

$landingButton.addEventListener('click', function () {
  $overlay.className = 'overlay';
  $popUp.className = 'pop-up';
});

$popUpButton.addEventListener('click', function () {
  $overlay.className = 'overlay display-none';
  $popUp.className = 'pop-up display-none';
});
