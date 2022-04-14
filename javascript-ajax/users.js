var $userList = document.querySelector('#user-list');

function handleRequest() {
  console.log('request status: ', getUsers.status);
  console.log('request response: ', getUsers.response);

  for (var i = 0; i < getUsers.response.length; i++) {
    var currentUser = getUsers.response[i];
    var user = document.createElement('li');
    user.textContent = currentUser.name;
    $userList.appendChild(user);
  }
}

var getUsers = new XMLHttpRequest();
getUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
getUsers.responseType = 'json';
getUsers.addEventListener('load', handleRequest);
getUsers.send();
