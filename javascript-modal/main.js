// if button is clicked a pop up window appears with grey overlay over it

// query landing button, curtain, overlay, pop-up div
// add click event to landing button
// ^^ event handle when clicked change z index of querys
// add click event to pop up button
// ^^ event handle when clicked pop up button change z index of querys

var $landingButton = document.querySelector('.landing-button');
var $curtain = document.querySelector('.curtain');
var $overlay = document.querySelector('.overlay');
var $popUp = document.querySelector('.pop-up');
var $popUpButton = document.querySelector('.pop-up button');

$landingButton.addEventListener('click', function () {
  $landingButton.className = 'landing-button z2';
  $curtain.className = 'curtain z1';
  $overlay.className = 'overlay z3';
  $popUp.className = 'pop-up z4';
});

$popUpButton.addEventListener('click', function () {
  $landingButton.className = 'landing-button z4';
  $curtain.className = 'curtain z3';
  $overlay.className = 'overlay z1';
  $popUp.className = 'pop-up z2';
});
