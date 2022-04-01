var books = [
  {
    isbn: '1234567',
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    isbn: '9876543',
    title: 'Sapiens',
    author: 'Yuval Harari'
  },
  {
    isbn: '2649276502',
    title: 'Count of Monte Cristo',
    author: 'Alexandre Dumars'
  }
];

console.log('books: ', books);
console.log('book array type: ', typeof array);

console.log('books stringified: ', JSON.stringify(books));
console.log('books stringified type: ', typeof JSON.stringify(books));

var studentJSON = '{"numberId": "77009389", "name": "Gabriel Enciso"}';
console.log('student: ', studentJSON);
console.log('student type: ', typeof studentJSON);

console.log('student as obj: ', JSON.parse(studentJSON));
console.log('student as obj type: ', typeof JSON.parse(studentJSON));
