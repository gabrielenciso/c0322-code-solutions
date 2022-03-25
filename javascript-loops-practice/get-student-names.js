/* exported getStudentNames */
function getStudentNames(students) { // function definiton
  var studentNames = []; // make empty array to store object names
  for (var i = 0; i < students.length; i++) { // loop through students array for each object
    studentNames.push(students[i].name); // dot notation at students at current index i to get property value and push to array
  }
  return studentNames; // return array
}
