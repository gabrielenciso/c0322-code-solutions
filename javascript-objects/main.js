var student = {
  firstName: 'Gabriel',
  lastName: 'Enciso',
  age: '22'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('full name: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';
console.log('student.livesinIrvine: ', student.livesInIrvine);
console.log('student.previousOccupation: ', student.previousOccupation);
console.log('student: ', student);

var vehicle = {
  make: 'Ford',
  model: 'Bronco',
  year: 1998
};

vehicle['color'] = 'green';
vehicle['isConvertible'] = false;

console.log('vehicle.color: ', vehicle.color);
console.log('vehicle.isConvertible: ', vehicle.isConvertible);
console.log('vehicle: ', vehicle);

var pet = {
  name: 'junie',
  type: 'goldendoodle'
};

delete pet.name;
delete pet.type;
console.log('pet: ', pet);
