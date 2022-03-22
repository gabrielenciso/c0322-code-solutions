function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('min to sec: ', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('greeting: ', greet('Gabriel'));

function getArea(width, height) {
  return width * height;
}

console.log('area: ', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

var gabriel = {
  firstName: 'Gabriel',
  lastName: 'Enciso'
};

console.log('first name: ', getFirstName(gabriel));

function getLastElement(array) {
  return array[array.length - 1];
}

var array = ['propane', 'and', 'propane', 'accessories'];

console.log('last elem: ', getLastElement(array));
