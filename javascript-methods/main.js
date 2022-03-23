// Math Object
var num1 = 23;
var num2 = 33;
var num3 = 7;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximum value: ', maximumValue);

var heroes = ['Ironman', 'Spiderman', 'Groot', 'Rocket'];
var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('random index: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('random hero: ', randomHero);

// Array Methods

var library = [
  {
    title: 'Percy Jackson and the Last Olympian',
    author: 'Rick Riordan'
  },
  {
    title: 'One Piece',
    author: 'Oda'
  },
  {
    title: 'Outliers',
    author: 'Malcolm Gladwell'
  }
];

var lastBook = library.pop();
console.log('last book: ', lastBook);

var firstBook = library.shift();
console.log('first book: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library after changes: ', library);

// String Methods

var fullName = 'Gabriel Enciso';
var firstAndLastName = fullName.split(' ');
console.log('first and last name: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('first name!: ', sayMyName);
